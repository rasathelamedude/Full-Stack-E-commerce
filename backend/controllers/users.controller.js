import User from "../models/users.model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "User fetched",
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      message: "User fetched",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User created",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  const { email, username, password } = req.body;
  const userId = req.user._id;

  try {
    if (!email || !username || !password) {
      throw new Error("Required credentials must be provided!");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.findByIdAndUpdate(userId, {
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User updated successfully!",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.user._id;

  try {
    await User.findByIdAndDelete(userId);

    res.status(204).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
