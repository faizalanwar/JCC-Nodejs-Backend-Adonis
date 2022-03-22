var express = require('express');
const { route } = require('.');
const venueController = require('../controllers/venue');
var router = express.Router();

const VenueController = require('../controllers/venue');
router.post('/', VenueController.store);
router.get('/', VenueController.showAll);
router.get('/:id', VenueController.findId);
router.put('/:id', venueController.update);
router.delete('/:id', venueController.destroy);
module.exports = router;