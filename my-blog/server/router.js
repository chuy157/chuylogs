const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});
router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

router.get('/getAll', (req, res, next) => {
  api.getAll(req, res, next);
});

router.post('/deleteId', (req, res, next) => {
  api.deleteId(req, res, next);
});
module.exports = router;