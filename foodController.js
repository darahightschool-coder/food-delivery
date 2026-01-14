const Food = require("../models/foodModel");

exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addFood = async (req, res) => {
  try {
    const result = await Food.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
