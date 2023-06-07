import { User } from "../models/users.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  console.log(req.query);

  const keyword = req.query.keyword;
  console.log(keyword);

  res.json({
    success: true,
    users: [users],
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Registeres Successfully",
  });
};

export const specialFunc = (req, res) => {
  res.json({
    success: true,
    message: "just checking",
  });
};

export const getUserDetails = async (req, res) => {
  //const {id}=req.query;
  const { id } = req.params;
  const user = await User.findById(id);
  // console.log(req.params);
  res.json({
    success: true,
    user,
  });
};
export const updateUser = async (req, res) => {
  //const {id}=req.query;
  const { id } = req.params;
  const user = await User.findById(id);
  // console.log(req.params);
  res.json({
    success: true,
    message:"User Updated",
  });
};

export const deleteUser = async (req, res) => {
  //const {id}=req.query;
  const { id } = req.params;
  const user = await User.findById(id);
  // console.log(req.params);
  //await user.remove();
  res.json({
    success: true,
    message:"User Deleted",
  });
};

