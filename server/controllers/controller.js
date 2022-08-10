// const { model, models } = require('mongoose')
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


// const expenseSchema = new Schema({
//   budgetType: { type: String, required: true },
//   expense: { type: Number, required: true },
//   merchant: {type: String, required: true },
//   date: { type: Date, required: true }
// })


module.exports = userController;