const db = require("./src/models");
const { Student } = require("./src/models/student.model");

console.log("Population Script .........")
const createStudentRow = (id, firstName, lastName, age, nationality) => {
  return { id, firstName, lastName, age, nationality };
};

const students = [
  createStudentRow(1, "John", "Doe", 24, "English"),
  createStudentRow(2, "Jan", "Dawaele", 27, "Belgian"),
  createStudentRow(3, "Jonathan", "Van Driessen", 33, "Belgian"),
  createStudentRow(4, "Anthony", "Lamot", 30, "Belgian"),
  createStudentRow(5, "Tim", "Ferris", 36, "American"),
  createStudentRow(6, "Melinda", "Gates", 63, "American"),
  createStudentRow(7, "Jan", "De Hollander", 13, "Dutch"),
  createStudentRow(8, "Maarten", "De Vriendt", 47, "Dutch"),
  createStudentRow(9, "Furkan", "Kursun", 23, "Turkish"),
];

const populateDb = async () => {
  const response = await Student.insertMany(students);
  console.log("response", response);
};

// Successful connection
db.on("connected", () => {
  console.log("Database connected successfully");
  populateDb();
});

// Unsuccessful connection
db.on("error", (error) =>
  console.log(console, "MongoDB connection error:" + error)
);
