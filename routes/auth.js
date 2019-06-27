const express = require('express');
const router = express.Router();

//route  GET api/auth
//desc   get logged in user
//acces  Private
router.get('/', (req, res) => {
    res.send('Get logged in user');
})

//route  POST api/auth
//desc   auth user & get token
//acces  Public
router.post('/', (req, res) => {
    res.send('log in user');
})

module.exports = router;