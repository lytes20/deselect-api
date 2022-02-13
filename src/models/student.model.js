const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  age: Number,
  nationality: String,
});

const Student = mongoose.model("Student", StudentsSchema, "students");

const createOne = (data) =>
  new Promise((resolve) => {
    const student = new Student(data);
    student.save((err, result) => {
      if (err) {
        console.log("error", err);
        resolve(null);
      } else {
        console.log("result", result);
        resolve(result);
      }
    });
  });

const getAll = async () => {
  return await Student.find({});
};

const queryConstructor = (operations) =>
  new Promise((resolve) => {
    Student.aggregate(operations).exec((err, results) => {
      if (err) {
        resolve(null);
      } else {
        resolve(results);
      }
    });
  });

module.exports = {
  createOne,
  getAll,
  Student,
  queryConstructor,
};
