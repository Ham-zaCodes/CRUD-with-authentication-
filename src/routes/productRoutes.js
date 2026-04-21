const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts); // Public
router.post("/", protect, createProduct); // Protected
router.put("/:id", protect, updateProduct); // Protected
router.delete("/:id", protect, deleteProduct); // Protected

module.exports = router;
