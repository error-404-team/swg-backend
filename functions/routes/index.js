const express = require('express');
const router = express.Router();

const {
    setUser, setGEOLocation, setDateTime,
    createShareLocation, setOS
} = require('./body')

router.post('/user/:id', setUser);
router.post('/geoLocation/:id', setGEOLocation)
// router.post('/dateTime/:id', setDateTime)
// router.post('/shareLocation/:id', createShareLocation)
// router.post('/os/:id', setOS)

module.exports = router;