import Product from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      message: "Fetched all products",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);

    res.status(200).json({
      success: true,
      message: "Fetched product",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  const productDetails = req.body;

  try {
    if (
      !productDetails.name ||
      !productDetails.price ||
      !productDetails.category
    ) {
      throw new Error("Required fields must be filled!");
    }

    const product = await Product.create(productDetails);

    res.status(200).json({
      success: true,
      message: "Fetched product",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.productId;
  const newProductDetails = req.body;

  try {
    if (!newProductDetails.name || !newProductDetails.price) {
      throw new Error("Required fields must be filled!");
    }

    const product = await Product.findByIdAndUpdate(
      productId,
      newProductDetails
    );

    res.status(200).json({
      success: true,
      message: "Updated product successfully!",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    await Product.findByIdAndDelete(productId);

    res.status(204).json({
      success: true,
      message: "Product delted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
