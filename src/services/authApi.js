// src/api/authApi.js
import { signInWithCustomToken, signOut } from "firebase/auth";
import { auth } from "./firebase"; 
import base_urls from "./base_urls"

// Helper: Save user session
const saveUserSession = (customToken, userData) => {
  localStorage.setItem("customToken", customToken);
  localStorage.setItem("user", JSON.stringify(userData));
};

// Helper: Remove session (logout)
export const clearUserSession = () => {
  try {
    localStorage.removeItem("customToken");
    localStorage.removeItem("user");
    
    // Clear any other session-related data
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('firebase:authUser:') || key.includes('session')) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
    
    console.log("Session cleared successfully");
  } catch (error) {
    console.error("Error clearing session:", error);
  }
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

    if (!response.ok || !data.success) {
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
  try {
    console.log("Starting logout process...");
    
    // Sign out from Firebase
    if (auth.currentUser) {
      await signOut(auth);
      console.log("Firebase signout successful");
    } else {
      console.log("No Firebase user to sign out");
    }
    
    // Clear local session
    clearUserSession();
    
    console.log("Logout completed successfully");
    
    return { 
      success: true, 
      message: "Logged out successfully" 
    };
  } catch (error) {
    console.error("Logout error:", error);
    
    // Even if there's an error, clear local session
    clearUserSession();
    
    return { 
      success: false, 
      error: error.message || "An error occurred during logout" 
    };
  }
};

// Check if user is currently logged in
export const isLoggedIn = () => {
  const token = localStorage.getItem("customToken");
  const user = localStorage.getItem("user");
  
  return !!(token && user);
};

// Get current user data
export const getCurrentUser = () => {
  try {
    const userStr = localStorage.getItem("user");
    if (!userStr) return null;
    
    return JSON.parse(userStr);
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};