import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
    try {
      const savedRoom = await Room.find(req.params.id);
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  };