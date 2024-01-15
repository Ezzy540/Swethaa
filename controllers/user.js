import User from "../models/User.js";

export const updateUser = async (req,res,next)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}
export const getUsercount = async (req, res, next) => {
  try {
    // Fetch all users
    // const users = await User.find();

    // Get the total number of users
    const userCount = await User.countDocuments();

    // Respond with both the users and the total count
    res.status(200).json({ userCount });
    // res.status(200).json({ users, userCount });
  } catch (err) {
    next(err);
  }
}

export const getStudentCount = async (req, res, next) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Filter users with "isStudent" set to true
    const studentUsers = users.filter(user => user.isStudent === true);

    // Count of users with "isStudent" set to true
    const studentCount = studentUsers.length;

    // Respond with the filtered student users and the count
    res.status(200).json({ studentCount });
  } catch (err) {
    next(err);
  }
};
export const getTeacherCount = async (req, res, next) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Filter users with "isStudent" set to true
    const teacherUsers = users.filter(user => user.isTeacher === true);

    // Count of users with "isStudent" set to true
    const teacherCount = teacherUsers.length;

    // Respond with the filtered student users and the count
    res.status(200).json({ teacherCount });
  } catch (err) {
    next(err);
  }
};
export const getStudentCountByGrade = async (req, res, next) => {
  try {
    const users = await User.find();
    const studentUsers = users.filter(user => user.isStudent === true);
    const gradeCounts = {};
    studentUsers.forEach(user => {
      const grade = user.grade;

      if (grade) {
        if (gradeCounts[grade]) {
          gradeCounts[grade]++;
        } else {
          gradeCounts[grade] = 1;
        }
      }
    });
    res.status(200).json({ gradeCounts });
  } catch (err) {
    next(err);
  }
};
export const getTeacherCountByGrade = async (req, res, next) => {
  try {
    const users = await User.find();
    const teacherUsers = users.filter(user => user.isTeacher === true);
    const gradeCounts = {};
    teacherUsers.forEach(user => {
      const grade = user.grade;

      if (grade) {
        if (gradeCounts[grade]) {
          gradeCounts[grade]++;
        } else {
          gradeCounts[grade] = 1;
        }
      }
    });
    res.status(200).json({ gradeCounts });
  } catch (err) {
    next(err);
  }
};