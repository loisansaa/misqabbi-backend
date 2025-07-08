const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth.middleware");
const checkAdmin = require("../middleware/rbac.middleware");

// TODO: Replace placeholder with real admin dashboard logic
router.get("/dashboard", verifyToken, checkAdmin, (req, res) => {
  res.status(200).json({ message: "Admin dashboard placeholder" });
});

module.exports = router;
