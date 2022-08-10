import React, { useState } from 'react';
import './TransactionsContainer.css';
// const expensesSchema = new Schema({
//   amount: { type: Number, required: true },
//   merchant: {type: String, required: true },
//   date: { type: String, required: true },
//   type: { type: String, required: true }
// })

    const TransactionsContainer = () => {
        const [amount, setAmount] = useState('');
        const [merchant, setMerchant] = useState('');
        const [date, setDate] = useState('');
        const [type, setType] = useState('');

        const amountChange = event => {
            setAmount(event.target.value);
            // console.log('value is:', event.target.value);
        };
        const merchantChange = event => {
            setMerchant(event.target.value);
            // console.log('value is:', event.target.value);
        };
        const dateChange = event => {
            setDate(event.target.value);
            // console.log('value is:', event.target.value);
        };
        // const typeChange = event => {
        //     setType(event.target.value);
        //     // console.log('value is:', event.target.value);
        // };

        // const handleClick = event => {
        // console.log('handleClick =>', amount);
        // };

        const newTransaction = () => {

            fetch('/api/createTransaction', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                amount: amount,
                merchant: merchant,
                date: date,
                type: type
              }),
            //   credentials: 'same-origin' 
            })
              .then((res) => res.json())
            //   .then(data => ????)
              .catch((err) => {
                console.log(err)
              })
          }

        return (
            <div id="transactions-container">
                <div className="amount">
                    <h2 id="amount-title" className="titles">Amount: </h2>
                        <input type="text" id="amount" name="amount" onChange={amountChange} value={amount} autoComplete="off" />
                </div>

                <div className="merchant">   
                    <h2 id="merchant-title" className="titles">Merchant:</h2>
                        <input type="text" id="merchant" name="merchant" onChange={merchantChange} value={merchant} autoComplete="off" />
                </div>

                <div className="date"> 
                    <h2 id="date-title" className="titles">Date:</h2>
                        <input type="text" id="date" name="date" onChange={dateChange} value={date} autoComplete="off" />  
                </div>

                <div className="type">   
                    <h2 id="type-title" className="titles">Type:</h2>
                    <select id="type-menu" onChange={event => setType(event.target.value)}>
                        <option value="housing">Housing</option>
                        <option value="transportation">Transportation</option>
                        <option value="food">Food</option>
                        <option value="bills">Bills</option>
                        <option value="recreation">Recreation</option>
                        <option value="essentials">Essentials</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="button-div">
                    <button onClick={newTransaction} id="add-transaction-button">Add Transaction</button>
                </div>    
                
            </div>
            );
        };



            
        export default TransactionsContainer;
        