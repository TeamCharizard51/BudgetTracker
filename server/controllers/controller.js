// const { model, models } = require('mongoose')
const User = require('../models/model')

const userController = {}

userController.createUser = async (req, res ,next) => {
    const { username, password } = req.body;
    try {
      if (username && password) {
        const user = await User.users.create({
          username: username,
          password: password,
      })
      console.log('account created: ', user);
      res.locals.user = user;
      return next();
    }

    }
    catch (err) {
      console.log(err)
      next({err: 'Error in createUser'})
    }
}

userController.login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await User.users.findOne({ username, password })
    if (user !== null) {
      console.log('logging in: ', user);
      res.locals.userId = user._id
      return next()
    } else {
      return res.redirect('/createAccount')
    }
  }
  catch (err) {
    return res.status(400).json({
      err: "User cannot be found. Please try again."
    })
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