import Chapter from "../models/Chapter.js";
import Data from "../models/Data.js";
import { createError } from "../utils/error.js";

export const createChapter = async (req, res, next) => {
  const dataId = req.params.dataid;
  const newChapter = new Chapter(req.body);

  try {
    const savedChapter = await newChapter.save();
    try {
      await Data.findByIdAndUpdate(dataId, {
        $push: { chapterdetails: savedChapter._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedChapter);
  } catch (err) {
    next(err);
  }
};

export const updateChapter = async (req, res, next) => {
  try {
    const updatedChapter = await Chapter.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedChapter);
  } catch (err) {
    next(err);
  }
};
// export const updateChapterAvailability = async (req, res, next) => {
//   try {
//     await Chapter.updateOne(
//       { "chapterNumbers._id": req.params.id },
//       {
//         $push: {
//           "chapterNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Chapter status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };
export const deleteChapter = async (req, res, next) => {
  const dataId = req.params.dataid;
  try {
    await Chapter.findByIdAndDelete(req.params.id);
    try {
      await Data.findByIdAndUpdate(dataId, {
        $pull: { chapterdetails: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Chapter has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getChapter = async (req, res, next) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    res.status(200).json(chapter);
  } catch (err) {
    next(err);
  }
};
export const getChapters = async (req, res, next) => {
  try {
    const chapters = await Chapter.find();
    res.status(200).json(chapters);
  } catch (err) {
    next(err);
  }
};
