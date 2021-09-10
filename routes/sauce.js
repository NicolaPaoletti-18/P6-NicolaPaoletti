const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/sauce');




router.post('/ ', auth, multer, stuffCtrl.createThing );
router.put('/:id', auth, multer,  stuffCtrl.updateThing);
router.delete('/:id',auth,  stuffCtrl.deleteThing);
router.get('/:id', auth,  stuffCtrl.getOneThing);
router.use('/', auth,  stuffCtrl.getAllThings);


module.exports = router;