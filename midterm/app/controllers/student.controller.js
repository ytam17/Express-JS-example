const Student = require("../models/student.model");

exports.addStudent = (req, res) => {
  console.log(req.body.name);

  if (!req.body.name) {
    return res.status(400).send({
      message: "name cannot be empty!",
    });
  }

  if (!req.body.age) {
    return res.status(400).send({
      message: "age cannot be empty!",
    });
  }

  if (!req.body.major) {
    return res.status(400).send({
      message: "major cannot be empty!",
    });
  }

  const student = new Student({
    name: req.body.name,
    age: req.body.age,
    major: req.body.major,
  });

  student
    .save()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong with inserting data",
        error: err,
      });
    });
};

exports.updateStudentById = (req, res) => {
  const id = req.params.id;

  if (!req.body.name) {
    return res.status(400).send({
      message: "name cannot be empty!",
    });
  }

  if (!req.body.age) {
    return res.status(400).send({
      message: "age cannot be empty!",
    });
  }

  if (!req.body.major) {
    return res.status(400).send({
      message: "major date cannot be empty!",
    });
  }

  Student.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      age: req.body.age,
      major: req.body.major,
    },
    {
      new: true,
    }
  )
    .then((student) => {
      res.send(student);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
        error: err,
      });
    });
};

exports.findAllStudents = (req, res) => {
  //fetch everything we have in db
  Student.find()
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
        error: err,
      });
    });
};

exports.findStudentById = (req, res) => {
  const id = req.params.id;

  Student.findById(id)
    .then((students) => {
      if (!students) {
        res.status(400).send({
          message: "Student not available",
        });
      }
      res.send(students);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
        error: err,
      });
    });
};

exports.deleteStudentById = (req, res) => {
  const id = req.params.id;

  Student.findByIdAndRemove(id)
    .then((students) => {
      res.send({
        message: "Student removed!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
        error: err,
      });
    });
};
