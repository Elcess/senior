const router = require('express').Router()
const Campus = require('../db/campuses');

router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id);
    const students = await campus.getStudents();
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
