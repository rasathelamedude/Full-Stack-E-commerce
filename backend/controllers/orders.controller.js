import Order from "../models/orders.model.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      success: true,
      message: "Fetched all orders",
      data: {
        orders,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrder = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const order = await Order.findById(orderId);

    res.status(200).json({
      success: true,
      message: "Fetched order",
      data: {
        order,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getOrderHistory = async (req, res) => {
  const userId = req.user._id;

  try {
    const userOrders = await Order.find({ userId });

    res.status(200).json({
      success: true,
      message: "Fetched order history",
      data: {
        userOrders,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
export const getPendingOrders = async (req, res) => {
  const userId = req.user._id;

  try {
    const pendingOrders = await Order.find({ userId, status: "Pending" });

    res.status(200).json({
      success: true,
      message: "Fetched pending orders",
      data: {
        pendingOrders,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const createOrder = async (req, res) => {
  const orderDetails = req.body;

  try {
    const order = await Order.create(orderDetails);

    res.status(200).json({
      success: true,
      message: "Order created",
      data: {
        order,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
