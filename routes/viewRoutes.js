const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

// This one is just Test
// router.get('/', (req, res) => {
//   res.status(200).render('base', {
//     tour: 'The Forest Hiker',
//     user: 'Görkem',
//   });
// });

router.get('/', authController.isLoggedIn, viewController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);

router.get('/login', authController.isLoggedIn, viewController.getLoginForm);
router.get('/me', authController.protect, viewController.getAccount);

router.post(
  '/submit-user-data',
  authController.protect,
  viewController.updateUserData,
);

module.exports = router;
