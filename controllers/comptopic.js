import Comptopic from "../models/Comptopic.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const createComptopic = async (req, res, next) => {
  const userId = req.params.userid;
  const newComptopic = new Comptopic(req.body);

  try {
    const savedComptopic = await newComptopic.save();
    try {
    //   User.comptopics.push(savedComptopic._id);
    // await user.save();
    

      await User.findByIdAndUpdate(userId, {
        $push: { comptopics: savedComptopic },
      });
    } catch (err) {
      next(err);
    }
  // const { subtopicId, questionId, savedScore, vedioPayed } = req.body;

  // try {
  //   // Find the user by ID
  //   // const user = await User.findById(userId);
    
  //   if (!user) {
  //     return res.status(404).json({ error: 'User not found' });
  //   }
    
    // Create a new Comptopic object
    // const newComptopic = {
    //   subtopicId,
    //   questionId,
    //   savedScore,
    //   vedioPayed,
    // };
    // const user = await User.findById(userId, {
    //   $push: { comptopics: newComptopic },
      // user.comptopics.push(newComptopic);
    // });

    // Push the new Comptopic object to the user's comptopics array
    // user.comptopics.push(newComptopic);

    // Save the updated user
    // await user.save();
    res.status(200).json(savedComptopic);
  } catch (err) {
    next(err);
  }
};

export const updateComptopic = async (req, res, next) => {
  try {
    const updatedComptopic = await Comptopic.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComptopic);
  } catch (err) {
    next(err);
  }
};
export const deleteComptopic = async (req, res, next) => {
  const userId = req.params.userid;
  try {
    await Comptopic.findByIdAndDelete(req.params.id);
    try {
      await User.findByIdAndUpdate(userId, {
        $pull: { comptopics: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Comptopic has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getComptopic = async (req, res, next) => {
  try {
    const subtopic = await Comptopic.findById(req.params.id);
    res.status(200).json(subtopic);
  } catch (err) {
    next(err);
  }
};
export const getComptopics = async (req, res, next) => {
  try {
    const subtopics = await Comptopic.find();
    res.status(200).json(subtopics);
  } catch (err) {
    next(err);
  }
};
