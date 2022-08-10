const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller')

//get requests
router.get('/', (req, res) => {
  return res.status(200).json()
})
router.get('/getExpenses', (req, res) => {
  return res.status(200).json()
})

//post requests
router.post('/createAccount', userController.createUser, (req, res) => {
  console.log('post check!')
  return res.status(200).send('user created')
})
router.post('/login', (req, res) => {
  return res.status(200).json()
})
router.post('/addExpense', (req, res) => {
  return res.status(200).json()
})

//update requests
router.patch('/editTotal', (req, res) => {
  return res.status(200).json()
})
router.patch('/editExpense', (req, res) => {
  return res.status(200).json()
})

//delete requests
router.post('/deleteAccount', (req, res) => {
  return res.status(200).send()
})

module.exports = router;