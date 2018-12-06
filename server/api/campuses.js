const router = require('express').Router()
const Campus = require('../db/campuses');
const Student = require('../db/students');

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id);
    const students = await Student.findAll({ where: { campusId: req.params.id } });
    const campusObj = {
      campus: campus,
      students: students
    };
    res.json(campusObj);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
