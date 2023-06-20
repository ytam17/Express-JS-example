module.exports = (app) => {
  const students = require("../controllers/student.controller.js");

  app.post("/students", students.addStudent);

  app.get("/students", students.findAllStudents);

  app.get("/students/:id", students.findStudentById);

  app.put("/students/:id", students.updateStudentById);

  app.delete("/students/:id", students.deleteStudentById);
};
