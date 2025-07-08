/* eslint-disable no-unused-vars */

// Middleware: verifyToken
// Purpose: Verify Firebase ID token and attach user info to req.user

const { auth } = require("../config/firebase.config");

async function verifyToken(req, res, next) {
  // TODO: Extract token from Authorization header
  // TODO: Verify token using FIrebase Admin SDK
  // TODO: Attach decoded user info to req.user
  // TODO: Handle missing/invalid token and send appropriate response

  // Allow all requests for now
  return next();
}

module.exports = verifyToken;
