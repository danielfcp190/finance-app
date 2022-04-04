import bcrypt from "bcryptjs";
import nc from "next-connect";
import User from "../../../models/User";
import db from "../../../utils/db";
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newUser = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    email: user.email,
  });
});

export default handler;
