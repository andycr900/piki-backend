
const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');



router.post('/',  userController.newUser);
router.get('/', userController.getUser);
router.put('/:id', userController.updateUser);



module.exports = router;