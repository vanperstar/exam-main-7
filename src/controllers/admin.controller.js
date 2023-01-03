import { read, write } from "../utils/model.js";
import crypto from "crypto";
import jwt from "../utils/jwt.js";
import { BadRequestError } from "../utils/errors.js";

const LOGIN = (req, res, next) => {
  try {
    let admins = read("admins");
    let { username, password } = req.body;
    let admin = admins.find(
      (admin) => admin.username == username && admin.password == password
    );
    if (!admin) {
      return next(new BadRequestError(400, "wrong usernama or password"));
    }

    res.status(200).json({
      status: 200,
      message: "ok",
      token: jwt.sign({ adminId: admin.adminId }),
      data: admin
    });
  } catch (error) {}
};


export default{
    LOGIN
}