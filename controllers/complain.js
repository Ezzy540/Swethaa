import Complain from "../models/Complain.js";

export const createComplain = async (req, res, next) => {
  const newComplain = new Complain(req.body);

  try {
    const savedComplain = await newComplain.save();
    res.status(200).json(savedComplain);
  } catch (err) {
    next(err);
  }
};
export const updateComplain = async (req, res, next) => {
  try {
    const updatedComplain = await Complain.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComplain);
  } catch (err) {
    next(err);
  }
};
export const deleteComplain = async (req, res, next) => {
  try {
    await Complain.findByIdAndDelete(req.params.id);
    res.status(200).json("Complain has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getComplain = async (req, res, next) => {
  try {
    const complain = await Complain.findById(req.params.id);
    res.status(200).json(complain);
  } catch (err) {
    next(err);
  }
};
export const getComplains = async (req, res, next) => {
  try {
    const complains = await Complain.find(req.params.id);
    res.status(200).json(complains);
  } catch (err) {
    next(err);
  }
};