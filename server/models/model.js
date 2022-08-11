const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://dbUser2:dbUser2@cluster0.ojwcp.mongodb.net/?retryWrites=true&w=majority';

// 'mongodb+srv://dbIan:Mx414LHYkJNWXWQX@cluster0.olfkxt7.mongodb.net/?retryWrites=true&w=majority';

const bcrypt = require('bcryptjs');

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'reinforcement',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('validate', function(next) {
  const plainPassword = this.get('password')
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(plainPassword, salt)
  console.log(hashedPassword)
  next()
});

const users = mongoose.model('userSchema', userSchema);

// const budgetSchema = new Schema({
//   budgetType: { type: String, required: true },
//   total: { type: Number, required: true },
// })

// const budgets = mongoose.model('budgetSchema', budgetSchema);

const expensesSchema = new Schema({
  amount: { type: Number, required: true },
  merchant: {type: String, required: true },
  date: { type: String, required: true, default: Date.now },
  type: { type: String, required: true }
})

const expenseSchema = new Schema({
  housing: [{name: {type: String, required: true }, merchant: String, date: { type: Date, required: true}, amount: { type: Number, required: true}}],
  transportation: [{name: {type: String, required: true }, merchant: String, date: { type: Date, required: true}, amount: { type: Number, required: true}}],
  food: [{name: {type: String, required: true }, merchant: String, date: { type: Date, required: true}, amount: { type: Number, required: true}}],
  bills: [{name: {type: String, required: true }, merchant: String, date: { type: Date, required: true}, amount: { type: Number, required: true}}],
  recreation: [{name: {type: String, required: true }, merchant: String, date: { type: Date, required: true}, amount: { type: Number, required: true}}],
  essentials: [{name: {type: String, required: true }, merchant: String, date: { type: Date, required: true}, amount: { type: Number, required: true}}],
  other: [{name: {type: String, required: true }, merchant: String, date: { type: Date, required: true}, amount: { type: Number, required: true}}]
})
const expenses = mongoose.model('expensesSchema', expensesSchema);

module.exports = {
  users,
  expenses,
  MONGO_URI
}
