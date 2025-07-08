/* eslint-disable no-unused-vars */

// Middleware : checkAdmin
// Purpose: Check if the authenticated user has an 'admin' role in Firestore

const { db } = require("../config/firebase.config");

async function checkAdmin(req, res, next) {
  // TODO: Get UID from req.user
  // TODO: Fetch user document from Firestore
  // TODO: Check if role === 'admin'
  // TODO: Allow or deny access based on role

  // Placeholder implementation
  return res
    .status(501)
    .json({ message: "checkAdmin middleware not yet implemented" });
}
