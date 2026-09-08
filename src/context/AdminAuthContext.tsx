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
      if (res.ok) {
        const data = await res.json();
        if (data.isAuthenticated) {
          setIsAdmin(true);
          setAdminEmail(data.email || 'ketapangcilegon@gmail.con');
          return true;
        }
      }
      setIsAdmin(false);
      setAdminEmail(null);
      return false;
    } catch (err) {
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
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAdmin(true);
        setAdminEmail(data.email || email);
        setIsLoginModalOpen(false);
        return { success: true };
      }
      return { success: false, error: data.error || 'Autentikasi gagal. Periksa email & password.' };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Gagal menghubungi server autentikasi.' };
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
