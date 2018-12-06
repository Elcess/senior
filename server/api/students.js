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

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const numDeleted = await Student.destroy({ where: { id: req.params.id } });
    res.json(numDeleted);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    await student.update(req.body);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
