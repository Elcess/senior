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

router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const numDeleted = await Campus.destroy({ where: { id: req.params.id } });
    res.json(numDeleted);
  } catch (err) {
    console.error(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id);
    await campus.update(req.body);
    res.json(campus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
