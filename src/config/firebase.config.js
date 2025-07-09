const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth } = require("firebase-admin/auth");
require("dotenv").config();

const app = initializeApp({
  credential: applicationDefault(),
  projectId: process.env.PROJECT_ID,
});

const db = getFirestore(app);
const auth = getAuth(app);

module.exports = {
  app,
  db,
  auth,
};
