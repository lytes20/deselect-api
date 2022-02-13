const Students = require("../models/student.model");
const { handleSendResponse } = require("../utils/messageHandler");

const getStudents = async (req, res) => {
  const students = await Students.getAll();
  console.log("students", students);
  return handleSendResponse(res, "Success", 200, students);
};

const postStudents = async (req, res) => {
  const { id, firstName, lastName, age, nationality } = req.body;
  console.log("id", id);

  const response = await Students.createOne({
    id,
    firstName,
    lastName,
    age,
    nationality,
  });
  console.log("response", response);
  return handleSendResponse(res, "Successfully posted student", 201, {
    id,
    firstName,
    lastName,
    age,
    nationality,
  });
};

const getStudentsGroupedByNationality = async (req, res) => {
  const operations = [
    {
      $group: {
        _id: "$nationality",
        data: {
          $push: "$$ROOT",
        },
      },
    },
  ];

  const response = await Students.queryConstructor(operations);
  console.log("response", response);
  const students = {};
  for (const nat of response) {
    students[nat._id] = nat.data;
  }
  return handleSendResponse(res, "Success", 200, students);
};

const getStudentsGroupedByNationalitySort = async (req, res) => {
  const { order } = req.query;
  console.log("Number", Number(order));
  // console.log("order", order)
  const operations = [
    {
      $sort: {
        firstName: Number(order),
      },
    },
    {
      $group: {
        _id: "$nationality",
        data: {
          $push: "$$ROOT",
        },
      },
    },
  ];

  const response = await Students.queryConstructor(operations);
  // console.log("response", response);
  const students = {};
  for (const nat of response) {
    students[nat._id] = nat.data;
  }
  return handleSendResponse(res, "Success", 200, students);
};

module.exports = {
  getStudents,
  postStudents,
  getStudentsGroupedByNationality,
  getStudentsGroupedByNationalitySort,
};
