import Data from "../models/Data.js";

export const createData = async (req, res, next) => {
  const newData = new Data(req.body);

  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (err) {
    next(err);
  }
};
export const updateData = async (req, res, next) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedData);
  } catch (err) {
    next(err);
  }
};
export const deleteData = async (req, res, next) => {
  try {
    await Data.findByIdAndDelete(req.params.id);
    res.status(200).json("Data has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getData = async (req, res, next) => {
  try {
    const data = await Data.findById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
export const getDatas = async (req, res, next) => {
//   const { min, max, ...others } = req.query;
  try {
    const datas = await Data.find(req.params.id);
    res.status(200).json(datas);
  } catch (err) {
    next(err);
  }
};
// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
// export const countByType = async (req, res, next) => {
//   try {
//     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
//     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
//     const resortCount = await Hotel.countDocuments({ type: "resort" });
//     const villaCount = await Hotel.countDocuments({ type: "villa" });
//     const cabinCount = await Hotel.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getHotelRooms = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         return Room.findById(room);
//       })
//     );
//     res.status(200).json(list)
//   } catch (err) {
//     next(err);
//   }
// };
