const express = require('express');
const router = express.Router();

//route  GET api/contacts
//desc   get all user contacts
//acces  Private
router.get('/', (req, res) => {
    res.send('get all user contacts')
})

//route  POST api/contacts
//desc   add new contacts
//acces  Private
router.post('/', (req, res) => {
    res.send('add contact')
})

//route  PUT api/contacts/:id
//desc   Update contact
//acces  Private
router.put('/', (req, res) => {
    res.send('update contact')
}
)
//route  DELETE api/contacts/:id
//desc   Delete contact
//acces  Private
router.delete('/', (req, res) => {
    res.send('delete contact')
})

module.exports = router;