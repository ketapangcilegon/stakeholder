'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface AdminAuthContextType {
  isAdmin: boolean;
  adminEmail: string | null;
  isLoading: boolean;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<boolean>;
  requireAdmin: (callback?: () => void) => boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const checkAuth = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch('/api/admin/auth', { credentials: 'include' });
      const contentType = res.headers.get('content-type');
      if (res.ok && contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if (data.isAuthenticated) {
          setIsAdmin(true);
          setAdminEmail(data.email || 'ketapangcilegon@gmail.com');
          return true;
        }
      }
      
      // Fallback: Check local storage admin session
      if (typeof window !== 'undefined') {
        const local = localStorage.getItem('stakeholder_admin_session_client');
        if (local) {
          try {
            const parsed = JSON.parse(local);
            if (parsed.email && Date.now() - parsed.timestamp < 7 * 24 * 60 * 60 * 1000) {
              setIsAdmin(true);
              setAdminEmail(parsed.email);
              return true;
            }
          } catch (e) {}
        }
      }

      setIsAdmin(false);
      setAdminEmail(null);
      return false;
    } catch (err) {
      if (typeof window !== 'undefined') {
        const local = localStorage.getItem('stakeholder_admin_session_client');
        if (local) {
          try {
            const parsed = JSON.parse(local);
            if (parsed.email && Date.now() - parsed.timestamp < 7 * 24 * 60 * 60 * 1000) {
              setIsAdmin(true);
              setAdminEmail(parsed.email);
              return true;
            }
          } catch (e) {}
        }
      }
      setIsAdmin(false);
      setAdminEmail(null);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = (email || '').trim().toLowerCase();
    const isLocalMatch = (cleanEmail === 'ketapangcilegon@gmail.com' || cleanEmail === 'ketapangcilegon@gmail.con') && password === 'Cilegon2026';

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
        credentials: 'include'
      });

      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        if (res.ok && data.success) {
          setIsAdmin(true);
          setAdminEmail(data.email || cleanEmail);
          setIsLoginModalOpen(false);
          if (typeof window !== 'undefined') {
            localStorage.setItem('stakeholder_admin_session_client', JSON.stringify({ email: cleanEmail, timestamp: Date.now() }));
          }
          return { success: true };
        }
        return { success: false, error: data.error || 'Email atau kata sandi admin tidak valid!' };
      } else {
        // If response is HTML / 404 / static export
        if (isLocalMatch) {
          setIsAdmin(true);
          setAdminEmail(cleanEmail);
          setIsLoginModalOpen(false);
          if (typeof window !== 'undefined') {
            localStorage.setItem('stakeholder_admin_session_client', JSON.stringify({ email: cleanEmail, timestamp: Date.now() }));
          }
          return { success: true };
        }
        return { success: false, error: 'Email atau kata sandi admin tidak valid!' };
      }
    } catch (err: any) {
      if (isLocalMatch) {
        setIsAdmin(true);
        setAdminEmail(cleanEmail);
        setIsLoginModalOpen(false);
        if (typeof window !== 'undefined') {
          localStorage.setItem('stakeholder_admin_session_client', JSON.stringify({ email: cleanEmail, timestamp: Date.now() }));
        }
        return { success: true };
      }
      return { success: false, error: 'Email atau kata sandi admin tidak valid!' };
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/admin/auth', {
        method: 'DELETE',
        credentials: 'include'
      });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('stakeholder_admin_session_client');
      }
      setIsAdmin(false);
      setAdminEmail(null);
    }
  };

  const requireAdmin = (callback?: () => void): boolean => {
    if (isAdmin) {
      if (callback) callback();
      return true;
    }
    openLoginModal();
    return false;
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAdmin,
        adminEmail,
        isLoading,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        login,
        logout,
        checkAuth,
        requireAdmin
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
