"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const ADMIN_EMAIL = "admin";
const ADMIN_PASSWORD = "admin123";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setUser({ id: "1", name: "Admin", email, role: "admin" });
      return true;
    }
    const stored = localStorage.getItem(`user_${email}`);
    if (stored) {
      const data = JSON.parse(stored);
      if (data.password === password) {
        setUser({ id: data.id, name: data.name, email, role: "user" });
        return true;
      }
    }
    return false;
  }, []);

  const register = useCallback((name: string, email: string, password: string) => {
    if (email === ADMIN_EMAIL) return false;
    const existing = localStorage.getItem(`user_${email}`);
    if (existing) return false;
    const newUser = { id: Date.now().toString(), name, password };
    localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
    setUser({ id: newUser.id, name, email, role: "user" });
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
