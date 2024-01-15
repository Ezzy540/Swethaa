import Freesession from "../models/Freesession.js";

export const createFreesession = async (req, res, next) => {
  const newFreesession = new Freesession(req.body);

  try {
    const savedFreesession = await newFreesession.save();
    res.status(200).json(savedFreesession);
  } catch (err) {
    next(err);
  }
};
export const updateFreesession = async (req, res, next) => {
  try {
    const updatedFreesession = await Freesession.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFreesession);
  } catch (err) {
    next(err);
  }
};
export const deleteFreesession = async (req, res, next) => {
  try {
    await Freesession.findByIdAndDelete(req.params.id);
    res.status(200).json("Freesession has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getFreesession = async (req, res, next) => {
  try {
    const freesession = await Freesession.findById(req.params.id);
    res.status(200).json(freesession);
  } catch (err) {
    next(err);
  }
};
export const getFreesessions = async (req, res, next) => {
  try {
    const freesessions = await Freesession.find(req.params.id);
    res.status(200).json(freesessions);
  } catch (err) {
    next(err);
  }
};