// src/firebase/userService.js

import { db } from "./firebase"; // Import Firestore configuration
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

/**
 * Create a new user in Firestore.
 * @param {string} userId - The unique user ID (e.g., from Firebase Auth).
 * @param {Object} userData - The user data to store in Firestore.
 */
export const createUser = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), userData);
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};



/**
 * Get user data from Firestore.
 * @param {string} userId - The unique user ID.
 */
export const getUser = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

/**
 * Update an existing user in Firestore.
 * @param {string} userId - The unique user ID.
 * @param {Object} updatedData - The updated user data.
 */
export const updateUser = async (userId, updatedData) => {
  try {
    await updateDoc(doc(db, "users", userId), updatedData);
    console.log("User updated successfully");
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

/**
 * Delete a user from Firestore.
 * @param {string} userId - The unique user ID.
 */
export const deleteUser = async (userId) => {
  try {
    await deleteDoc(doc(db, "users", userId));
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
