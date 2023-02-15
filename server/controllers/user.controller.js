import User from "../mongodb/models/user.js";

const getAllUsers = async (req, res) => {
  try {
    const { _end } = req.query;
    const users = await User.find({}).limit(_end ? _end : 10);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(200).json(userExists);

    const newUser = await User.create({
      name,
      email,
      avatar,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserInfoByID = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id }).populate("allProperties");

    if (user) return res.status(200).json(user);

    res.statu(404).json({ message: "User not found." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllUsers, createUser, getUserInfoByID };
