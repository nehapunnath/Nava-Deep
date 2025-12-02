// src/api/authApi.js
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "./firebase"; 

import base_urls from "./base_urls"

// Helper: Save user session
const saveUserSession = (customToken, userData) => {
  localStorage.setItem("customToken", customToken);
  localStorage.setItem("user", JSON.stringify(userData));
};

// Helper: Remove session (logout)
export const clearUserSession = () => {
  localStorage.removeItem("customToken");
  localStorage.removeItem("user");
  auth.signOut();
};

// Main Login Function
export const login = async (email, password) => {
  try {
    const response = await fetch(`${base_urls}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "Login failed");
    }

    // Step 1: Sign in with custom token (this creates Firebase session)
    const userCredential = await signInWithCustomToken(auth, data.token);
    const firebaseUser = userCredential.user;

    // Step 2: Save everything
    const userData = {
      uid: data.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName || email.split("@")[0],
      isAdmin: data.isAdmin || false,
      photoURL: firebaseUser.photoURL,
    };

    saveUserSession(data.token, userData);

    return {
      success: true,
      user: userData,
    };

  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      error: error.message || "Network error. Please try again.",
    };
  }
};

// Auto-login on page refresh
export const checkAuthStatus = async () => {
  const token = localStorage.getItem("customToken");
  const savedUser = localStorage.getItem("user");

  if (!token || !savedUser) {
    return { isAuthenticated: false };
  }

  try {
    // Re-authenticate with custom token
    const userCredential = await signInWithCustomToken(auth, token);
    const user = userCredential.user;

    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email.split("@")[0],
      isAdmin: JSON.parse(savedUser).isAdmin,
      photoURL: user.photoURL,
    };

    return { isAuthenticated: true, user: userData };
  } catch (error) {
    console.log("Token expired or invalid, clearing session");
    clearUserSession();
    return { isAuthenticated: false };
  }
};

// Logout
export const logout = async () => {
  await auth.signOut();
  clearUserSession();
  return { success: true };
};