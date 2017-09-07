const express = require('express');
const Celebrity = require('../models/celebrity')

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, celebrities) => {
    if (err) {
      next(err);
    } else {
      res.render('celebrity/index')
      console.log('you fucked up')
    }
  })
});

// router.get('/celebrties/:id', (req, res, next) => {
//   Celebrity.findById({}, (err, celebrity) => {
//     if (err) {
//       next(err);
//     } else {
//       res.render('celebrity', {celebrties})
//     }
//   })
// });
//
// router.get('/drones/new', (req, res, next) => {
//   res.render('drones/new')
// });
//
//
// router.post('/drones', (req, res, next) => {
//   const newDroneInfo = {
//     droneName: req.body.droneName,
//     propellers: req.body.propellers,
//     maxSpeed: req.body.maxSpeed
//   }
//   const newDrone = new Drone(newDroneInfo);
//
//   newDrone.save((err) => {
//     if (err) {
//       next(err);
//     } else {
//       return res.redirect('../drones')
//     }
//   });
// });

module.exports = router;
