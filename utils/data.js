import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
    },
  ],
};

export default data;
