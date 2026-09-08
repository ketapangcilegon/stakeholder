import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const ADMIN_EMAIL_PRIMARY = (process.env.ADMIN_EMAIL || 'ketapangcilegon@gmail.con').trim().toLowerCase();
const ADMIN_EMAIL_ALT = (process.env.ADMIN_EMAIL_ALT || 'ketapangcilegon@gmail.com').trim().toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Cilegon2026';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'cilegon-maritime-secret-key-2026-stakeholder-super-secure';

const COOKIE_NAME = 'si_kepala_admin_session';

// Helper to sign session data
function createSessionToken(email: string): string {
  const timestamp = Date.now();
  const payload = `${email}:${timestamp}:admin`;
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex');
  return Buffer.from(`${payload}:${signature}`).toString('base64');
}

// Helper to verify session token
function verifySessionToken(token: string): { valid: boolean; email?: string } {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split(':');
    if (parts.length !== 4) return { valid: false };

    const [email, timestampStr, role, signature] = parts;
    const timestamp = parseInt(timestampStr, 10);

    // Expire after 7 days
    const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > SEVEN_DAYS_MS) {
      return { valid: false };
    }

    if (role !== 'admin') return { valid: false };

    const expectedPayload = `${email}:${timestamp}:${role}`;
    const expectedSignature = crypto.createHmac('sha256', SESSION_SECRET).update(expectedPayload).digest('hex');

    if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return { valid: true, email };
    }
    return { valid: false };
  } catch (err) {
    return { valid: false };
  }
}

// GET: Check Auth Status
export async function GET(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return NextResponse.json({ isAuthenticated: false }, { status: 200 });
  }

  const { valid, email } = verifySessionToken(token);
  if (!valid) {
    const res = NextResponse.json({ isAuthenticated: false }, { status: 200 });
    res.cookies.delete(COOKIE_NAME);
    return res;
  }

  return NextResponse.json({
    isAuthenticated: true,
    email: email || ADMIN_EMAIL_PRIMARY
  }, { status: 200 });
}

// POST: Login Admin
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const inputEmail = (body.email || '').trim().toLowerCase();
    const inputPassword = body.password || '';

    // Validate email (support both ketapangcilegon@gmail.con and ketapangcilegon@gmail.com)
    const isEmailMatch = inputEmail === ADMIN_EMAIL_PRIMARY || inputEmail === ADMIN_EMAIL_ALT;
    const isPasswordMatch = inputPassword === ADMIN_PASSWORD;

    if (!isEmailMatch || !isPasswordMatch) {
      return NextResponse.json(
        { success: false, error: 'Email atau kata sandi admin tidak valid!' },
        { status: 401 }
      );
    }

    // Generate secure session token
    const token = createSessionToken(inputEmail);

    const response = NextResponse.json({
      success: true,
      email: inputEmail,
      message: 'Login admin berhasil terverifikasi.'
    });

    // Set secure HttpOnly cookie
    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/'
    });

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan sistem saat memproses login.' },
      { status: 500 }
    );
  }
}

// DELETE: Logout Admin
export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: 'Sesi admin berhasil diakhiri.'
  });

  response.cookies.delete(COOKIE_NAME);
  return response;
}
