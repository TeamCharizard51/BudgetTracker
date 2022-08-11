const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller')
const mongoose = require('mongoose');


//get requests
router.get('/', (req, res) => {
  return res.status(200).json()
})
router.get('/getTransactions', userController.getTransactions, (req, res) => {
  return res.status(200).send({ transactions: res.locals.list });
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
<<<<<<< HEAD
router.post('/deleteExpense', userController.deleteExpense, (req, res) => {
=======
router.delete('deleteExpense', (req, res) => {
>>>>>>> dev
  return res.status(200).send()
})

module.exports = router;