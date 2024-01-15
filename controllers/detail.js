import Detail from "../models/Detail.js";
import Chapter from "../models/Chapter.js";
import { createError } from "../utils/error.js";

export const createDetail = async (req, res, next) => {
  const chapterId = req.params.chapterid;
  const newDetail = new Detail(req.body);

  try {
    const savedDetail = await newDetail.save();
    try {
      await Chapter.findByIdAndUpdate(chapterId, {
        $push: { details: savedDetail._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedDetail);
  } catch (err) {
    next(err);
  }
};

export const updateDetail = async (req, res, next) => {
  try {
    const updatedDetail = await Detail.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDetail);
  } catch (err) {
    next(err);
  }
};
// export const updateDetailAvailability = async (req, res, next) => {
//   try {
//     await Detail.updateOne(
//       { "detailNumbers._id": req.params.id },
//       {
//         $push: {
//           "detailNumbers.$.unavailableDates": req.body.dates
//         },
//       }
//     );
//     res.status(200).json("Detail status has been updated.");
//   } catch (err) {
//     next(err);
//   }
// };
export const deleteDetail = async (req, res, next) => {
  const chapterId = req.params.chapterid;
  try {
    await Detail.findByIdAndDelete(req.params.id);
    try {
      await Chapter.findByIdAndUpdate(chapterId, {
        $pull: { details: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Detail has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getDetail = async (req, res, next) => {
  try {
    const detail = await Detail.findById(req.params.id);
    res.status(200).json(detail);
  } catch (err) {
    next(err);
  }
};
export const getDetails = async (req, res, next) => {
  try {
    const details = await Detail.find();
    res.status(200).json(details);
  } catch (err) {
    next(err);
  }
};
