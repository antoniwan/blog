// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site metadata
export const SITE_TITLE = "StrongVault";
export const SITE_DESCRIPTION = "Secure password management and digital vault solution";
export const SITE_AUTHOR = "StrongVault Team";
export const SITE_VERSION = "1.0.0";

// Navigation
export const NAV_ITEMS = {
  HOME: { label: "Home", path: "/" },
  DASHBOARD: { label: "Dashboard", path: "/dashboard" },
  PASSWORDS: { label: "Passwords", path: "/passwords" },
  SECURE_NOTES: { label: "Secure Notes", path: "/notes" },
  SETTINGS: { label: "Settings", path: "/settings" },
} as const;

// Feature flags
export const FEATURES = {
  ENABLE_2FA: true,
  ENABLE_PASSWORD_GENERATOR: true,
  ENABLE_SECURE_NOTES: true,
  ENABLE_PASSWORD_SHARING: false,
  ENABLE_BIOMETRIC_AUTH: true,
} as const;

// UI Constants
export const UI = {
  MAX_PASSWORD_LENGTH: 128,
  MIN_PASSWORD_LENGTH: 12,
  PASSWORD_STRENGTH_LEVELS: {
    WEAK: "weak",
    MEDIUM: "medium",
    STRONG: "strong",
    VERY_STRONG: "very-strong",
  },
  TOAST_DURATION: 3000,
  MAX_RECENT_ITEMS: 5,
} as const;

// API Constants
export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  TIMEOUT: 30000,
  RETRY_ATTEMPTS: 3,
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      LOGOUT: "/auth/logout",
      REFRESH: "/auth/refresh",
    },
    PASSWORDS: {
      LIST: "/passwords",
      CREATE: "/passwords",
      UPDATE: "/passwords/:id",
      DELETE: "/passwords/:id",
    },
    NOTES: {
      LIST: "/notes",
      CREATE: "/notes",
      UPDATE: "/notes/:id",
      DELETE: "/notes/:id",
    },
  },
} as const;

// Security Constants
export const SECURITY = {
  PASSWORD_HASH_ALGORITHM: "argon2id",
  ENCRYPTION_ALGORITHM: "aes-256-gcm",
  KEY_DERIVATION_ITERATIONS: 100000,
  SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes in milliseconds
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid email or password",
  ACCOUNT_LOCKED: "Account temporarily locked. Please try again later",
  NETWORK_ERROR: "Network error. Please check your connection",
  SERVER_ERROR: "Server error. Please try again later",
  VALIDATION_ERROR: "Please check your input and try again",
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  PASSWORD_SAVED: "Password saved successfully",
  PASSWORD_UPDATED: "Password updated successfully",
  PASSWORD_DELETED: "Password deleted successfully",
  NOTE_SAVED: "Note saved successfully",
  NOTE_UPDATED: "Note updated successfully",
  NOTE_DELETED: "Note deleted successfully",
} as const;
