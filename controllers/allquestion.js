import Allquestion from "../models/Allquestion.js";
import Detail from "../models/Detail.js";
import mongoose from "mongoose";
import { createError } from "../utils/error.js";

export const createAllquestion = async (req, res, next) => {
  const detailId = req.params.detailid;
  const newAllquestion = new Allquestion(req.body);

  try {
    const savedAllquestion = await newAllquestion.save();
    try {
      await Detail.findByIdAndUpdate(detailId, {
        $push: { questions: savedAllquestion },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedAllquestion);
  } catch (err) {
    next(err);
  }
};

// export const updateAllquestion = async (req, res, next) => {
//   const detailId = req.params.detailid;
//   try {
//     const updatedAllquestion = await Allquestion.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     const detailUpdatepull = await Detail.findByIdAndUpdate(detailId, {
//       $pull: { questions: { _id: req.params.id } },
//     });
//     const detailUpdatepush = await Detail.findByIdAndUpdate(detailId, {
//       $push: { questions: { _id: updatedAllquestion } },
//     });
//     res.status(200).json(updatedAllquestion);
//   } catch (err) {
//     next(err);
//   }
// };
export const updateAllquestion = async (req, res, next) => {
  const detailId = req.params.detailid;
  const session = await mongoose.startSession();

  try {
    // Start a transaction
    await session.startTransaction();

    // Update Allquestion
    const updatedAllquestion = await Allquestion.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    // Update Detail by pulling the old question
    await Detail.findByIdAndUpdate(detailId, {
      $pull: { questions: { _id: req.params.id } },
    });

    // Update Detail by pushing the updated question
    await Detail.findByIdAndUpdate(detailId, {
      $push: { questions: updatedAllquestion },
    });

    // Commit the transaction
    await session.commitTransaction();

    res.status(200).json(updatedAllquestion);
  } catch (err) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    next(err);
  } finally {
    // End the session
    session.endSession();
  }
};

export const deleteAllquestion = async (req, res, next) => {
  const questionId = req.params.questionid;
  const detailId = req.params.detailid;

  try {
    const deletedQuestion = await Allquestion.findByIdAndDelete(questionId);
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found." });
    }

    const detailUpdate = await Detail.findByIdAndUpdate(detailId, {
      $pull: { questions: { _id: deletedQuestion._id } },
    });

    res
      .status(200)
      .json({ message: "Question has been deleted from Allquestion." });
  } catch (err) {
    // Handle any other errors
    console.error(err);
    next(err);
  }
};

export const getAllquestion = async (req, res, next) => {
  try {
    const subtopic = await Allquestion.findById(req.params.id);
    res.status(200).json(subtopic);
  } catch (err) {
    next(err);
  }
};
export const getAllquestions = async (req, res, next) => {
  try {
    const subtopics = await Allquestion.find();
    res.status(200).json(subtopics);
  } catch (err) {
    next(err);
  }
};
