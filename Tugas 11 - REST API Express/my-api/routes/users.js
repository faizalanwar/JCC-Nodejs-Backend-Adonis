var express = require('express');
var router = express.Router();

//controller
const UserController = require('../controllers/users');
 

router.get('/test', function(req, res, next) {
  res.send('this is test of other users endpoint');
});

router.post('/register', UserController.register);
router.get('/karyawan', UserController.showAll);
router.post('/login', UserController.login);
router.post('/karyawan/:name/siswa', UserController.addSiswa);
module.exports = router;
