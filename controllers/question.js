import Question from "../models/Question.js";
import Subtopic from "../models/Subtopic.js";
import { createError } from "../utils/error.js";
import mongoose from "mongoose";

export const createQuestion = async (req, res, next) => {
  const subtopicId = req.params.subtopicid;
  const newQuestion = new Question(req.body);

  try {
    const savedQuestion = await newQuestion.save();
    try {
      await Subtopic.findByIdAndUpdate(subtopicId, {
        $push: { questions: savedQuestion },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedQuestion);
  } catch (err) {
    next(err);
  }
};


export const updateQuestion = async (req, res, next) => {
  const detailId = req.params.subtopicid;
  const session = await mongoose.startSession();

  try {
    // Start a transaction
    await session.startTransaction();

    // Update Allquestion
    const updatedquestion = await Question.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    // Update Detail by pulling the old question
    await Subtopic.findByIdAndUpdate(detailId, {
      $pull: { questions: { _id: req.params.id } },
    });

    // Update Detail by pushing the updated question
    await Subtopic.findByIdAndUpdate(detailId, {
      $push: { questions: updatedquestion },
    });

    // Commit the transaction
    await session.commitTransaction();

    res.status(200).json(updatedquestion);
  } catch (err) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    next(err);
  } finally {
    // End the session
    session.endSession();
  }
};
// export const updateQuestionAvailability = async (req, res, next) => {
//   try {
//     await Question.updateOne(
//       { "subtopicNumbers._id": req.params.id },
//       {
//         $push: {
//           "subtopicNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Question status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };

export const deleteQuestion = async (req, res, next) => {
  const questionId = req.params.id;
  const detailId = req.params.subtopicid;

  try {
    const deletedQuestion = await Question.findByIdAndDelete(questionId);
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found." });
    }

    const detailUpdate = await Subtopic.findByIdAndUpdate(detailId, {
      $pull: { questions: { _id: deletedQuestion._id } },
    });

    res
      .status(200)
      .json({ message: "Question has been deleted from question." });
  } catch (err) {
    // Handle any other errors
    console.error(err);
    next(err);
  }
};
export const getQuestion = async (req, res, next) => {
  try {
    const subtopic = await Question.findById(req.params.id);
    res.status(200).json(subtopic);
  } catch (err) {
    next(err);
  }
};

export const getQuestions = async (req, res, next) => {
  try {
    const subtopics = await Question.find();
    res.status(200).json(subtopics);
  } catch (err) {
    next(err);
  }
};
