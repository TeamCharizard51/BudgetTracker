import React, {useEffect, useState} from 'react';

const MainContainer = () => {

  //state: Expending and Budge info from user

  //either we get the use data and saved it all in the state data
  const [data, setData] = useState([]);

  //OR we split the data from the request into separate states
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState([]);

  //form to post later on
  const [formExpenses, setFormExpenses] = useState([]);

  //get data from user when component mounts
  // useEffect(() => {
  //   getData()
  // }, []);
  const getData = () => {
    fetch('/getData', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'same-origin' 
    })
      .then((res) => res.json)
      // .then((res) => setData(res))
      .catch((err) => {
        console.log(err)
      })
  }

  const updateExpenses = () => {
    fetch('/updateExpenses', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formExpenses,
      }),
      credentials: 'same-origin' 
    })
      .then((res) => res.json)
      // .then((res) => setExpenses(res))
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      {'hello'}
    </div>
  );
}
export default MainContainer;