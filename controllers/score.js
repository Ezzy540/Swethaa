import Score from "../models/Score.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const createScore = async (req, res, next) => {
  const userId = req.params.userid;
  const newScore = new Score(req.body);

  try {
    const savedScore = await newScore.save();
    try {
      await User.findByIdAndUpdate(userId, {
        $push: { scores: savedScore },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedScore);
  } catch (err) {
    next(err);
  }
};

export const updateScore = async (req, res, next) => {
  try {
    const updatedScore = await Score.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedScore);
  } catch (err) {
    next(err);
  }
};
export const deleteScore = async (req, res, next) => {
  const userId = req.params.userid;
  try {
    await Score.findByIdAndDelete(req.params.id);
    try {
      await User.findByIdAndUpdate(userId, {
        $pull: { scores: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Score has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getScore = async (req, res, next) => {
  try {
    const score = await Score.findById(req.params.id);
    res.status(200).json(score);
  } catch (err) {
    next(err);
  }
};
export const getScores = async (req, res, next) => {
  try {
    const scores = await Score.find();
    res.status(200).json(scores);
  } catch (err) {
    next(err);
  }
};
