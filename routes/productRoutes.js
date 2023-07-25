import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  searchController,
  updateProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
} from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete(
  "/delete-product/:pid",
  // requireSignIn,
  // isAdmin,
  // formidable(),
  deleteProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.post("/product-filters", productFiltersController);

router.get("/product-count", productCountController);
router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchController);

router.get("/related-product/:pid/:cid", relatedProductController);

router.get("/product-category/:slug", productCategoryController);

// payment token (braintree)
router.get("/braintree/token", braintreeTokenController);

//payment
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
