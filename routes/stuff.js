const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');




router.post('/ ', auth, multer, stuffCtrl.createThing );
router.get('/:id', auth,  stuffCtrl.getOneThing);
router.delete('/:id',auth,  stuffCtrl.deleteThing);
router.put('/:id', auth,  stuffCtrl.modifyThing);
router.use('/', auth,  stuffCtrl.getAllThings);


module.exports = router;