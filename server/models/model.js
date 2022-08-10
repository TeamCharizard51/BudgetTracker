const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://dbIan:Mx414LHYkJNWXWQX@cluster0.olfkxt7.mongodb.net/?retryWrites=true&w=majority';

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
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const users = mongoose.model('userSchema', userSchema);

const budgetSchema = new Schema({
  budgetType: { type: String, required: true },
  total: { type: Number, required: true },
})

const budgets = mongoose.model('budgetSchema', budgetSchema);

const expenseSchema = new Schema({
  budgetType: { type: Number, required: true },
  expense: { type: Number, required: true },
  merchant: {type: String, required: true },
  date: { type: Date, required: true }
})
const expenses = mongoose.model('expenseSchema', expenseSchema)

module.exports = {
  users,
  budgets,
}
