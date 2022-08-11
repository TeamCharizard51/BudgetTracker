const { model, models } = require('mongoose')
const User = require('../models/model')

const userController = {}

userController.createUser = async (req, res ,next) => {
    console.log('controller check')
    const { username, password } = req.body;
    try {
      if (username && password) {
        const user = await User.users.create({
          username: username,
          password: password,
      })
      return next();
    }

    }
    catch (err) {
      console.log(err)
      next({err: 'Error in createUser'})
    }
}

userController.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    let user = await User.users.find({
      username: username,
      password: password,
    });
    if (user !== null) {
      res.locals.user = user._id;
      return next()
    }
  }
  catch (err) {
    console.log(err)
    next({ err: 'error at login'})
  }
}

userController.createTransaction = async (req, res, next) => {
  console.log("create transaction checked")
  const { amount, merchant, date, type } = req.body;
  try {
    let transaction = await User.expenses.create({
      amount: amount,
      merchant: merchant,
      date: date,
      type: type
    })
    res.locals.newTransaction = transaction;
    console.log('transaction added:', transaction);
    return next();
  }
  catch (err) {
    console.log(err)
    next({ err: 'error at createTransaction'})
  }
}


userController.getTransactions = async (req, res, next) => {
  try {
    const data = await User.expenses.find();
    res.json(data);
  }
  catch (err) {
    console.log(err)
    next({ err: 'error at getTransactions'})
  }


  
    // let transactions = User.expenses.find({}, 'amount type merchant date', (err, expenses) => {
    //   if (err) return next('Error getting transactions');
    //   console.log('grabbing transactions');
    //   res.locals.list = transactions;
    //   return next();
    // })
  }

userController.deleteExpense = async (req, res, next) => {
  try {
    const data = await User.expenses.find();
    res.json(data);
  }
  catch (err) {
    console.log(err)
    next({ err: 'error at getTransactions'})
  }
}
module.exports = userController;