import React, { useState, useEffect } from 'react';
import './TransactionList.css';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';

const TransactionList = () => {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        getTransactions();
      }, [])

 const getTransactions = () => {
    fetch('/api/getTransactions')
      .then((res) => res.json())
      .then(data => {
        setList(data)
        console.log(data)})
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteTransaction = (date) => {
    fetch(`/api/deleteExpense/${date}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err)
      })
  }
  const transactions = [];
  list.forEach(obj => {
    const { amount, date, type, merchant } = obj;
    console.log(obj)
    transactions.push(
        <div id="transaction" >
            <p id="trans-amount" className="trans-items">${obj.amount}</p>
            <p id="trans-merchant" className="trans-items">{obj.merchant}</p>
            <p id="trans-date" className="trans-items">{obj.date}</p> 
            <p id="trans-type" className="trans-items">{obj.type}</p>
            <div>
                <button id="edit-button" onClick={() => {}}><img src={Edit} alt="edit" className="trans-buttons"/></button>
                <button id="delete-button" onClick={() => {deleteTransaction(obj.date)}}><img src={Delete} alt="delete" className="trans-buttons"/></button>
            </div>
            <hr/>
         </div>
        
    )
  })
  // transactions.sort((a,b) => (a.date - b.date));
  
    return(
        <div id="all-transactions"> {transactions}</div>
    )
}

export default TransactionList;


        /* <div id="trans-amount">{obj.amount}</div>
            <div id="trans-merchant">{obj.merchant}</div>
            <div id="trans-type">{obj.type}</div>
            <div id="trans-date">{obj.date}</div> */

                    /* <p id="trans-amount" className="trans-items">{obj.amount}</p>
            <p id="trans-merchant" className="trans-items">{obj.merchant}</p>
            <p id="trans-type" className="trans-items">{obj.type}</p>
            <p id="trans-date" className="trans-items">{obj.date}</p> */