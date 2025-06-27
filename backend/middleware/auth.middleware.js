import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/users.model.js";

export const authorize = async (req, res, next) => {
  let token;

  try {
    // see if a token is provided
    if (
      req.headers.authorization ||
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // if not throw error;
    if (!token) {
      throw new Error("Unauthorized!");
    }

    // decode the token to figure out its user;
    const decode = jwt.verify(token, JWT_SECRET);

    // find the user;
    const user = await User.findById(decode.userId);

    // attach the user to the request object;
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
