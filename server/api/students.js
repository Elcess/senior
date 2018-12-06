const router = require('express').Router()
const Student = require('../db/students');

router.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    const campus = await student.getCampus();
    const studentObj = {
      student: student,
      campus: campus
    };
    res.json(studentObj);
  } catch (err) {
    next(err);
  }
})

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
