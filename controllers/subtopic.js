import Subtopic from "../models/Subtopic.js";
import Detail from "../models/Detail.js";
import { createError } from "../utils/error.js";

export const createSubtopic = async (req, res, next) => {
  const detailId = req.params.detailid;
  const newSubtopic = new Subtopic(req.body);

  try {
    const savedSubtopic = await newSubtopic.save();
    try {
      await Detail.findByIdAndUpdate(detailId, {
        $push: { miniTopics: savedSubtopic._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedSubtopic);
  } catch (err) {
    next(err);
  }
};

export const updateSubtopic = async (req, res, next) => {
  try {
    const updatedSubtopic = await Subtopic.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedSubtopic);
  } catch (err) {
    next(err);
  }
};
// export const updateSubtopicAvailability = async (req, res, next) => {
//   try {
//     await Subtopic.updateOne(
//       { "detailNumbers._id": req.params.id },
//       {
//         $push: {
//           "detailNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Subtopic status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };
export const deleteSubtopic = async (req, res, next) => {
  const detailId = req.params.detailid;
  try {
    await Subtopic.findByIdAndDelete(req.params.id);
    try {
      await Detail.findByIdAndUpdate(detailId, {
        $pull: { miniTopics: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Subtopic has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getSubtopic = async (req, res, next) => {
  try {
    const detail = await Subtopic.findById(req.params.id);
    res.status(200).json(detail);
  } catch (err) {
    next(err);
  }
};
export const getSubtopics = async (req, res, next) => {
  try {
    const details = await Subtopic.find();
    res.status(200).json(details);
  } catch (err) {
    next(err);
  }
};
