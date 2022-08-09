// const { model, models } = require('mongoose')
const User = require('../models/model')

const userController = {}

userController.createUser = async (req, res ,next) => {
    console.log('controller check')
    const { username, password, email } = req.body;
    try {
      if (username && password && email) {
        const user = await User.users.create({
          username: username,
          password: password,
          email: email,
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

module.exports = userController;