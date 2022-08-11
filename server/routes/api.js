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
  return res.status(200).redirect('/app');
})
router.post('/login', userController.login, (req, res) => {
  return res.status(200).redirect('/app');
})
router.post('/createTransaction', userController.createTransaction, (req, res) => {
  return res.status(200).json(res.locals.newTransaction);
})

//update requests
router.patch('/editTotal', (req, res) => {
  return res.status(200).json()
})
router.patch('/editExpense', (req, res) => {
  return res.status(200).json()
})

//delete requests
router.delete('deleteExpense', (req, res) => {
  return res.status(200).send()
})

module.exports = router;