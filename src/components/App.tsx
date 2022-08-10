import React from "react";
import MainContainer from "../containers/MainContainer";
import Navbar from "../components/Navbar";
import PieChartGraph from "./PieChartGraph";
import './App.css'

//mock expenses
const expenses = {
  housing: [
    {name: 'apartment',
    merchant: 'vitco',
    date: 'random date',
    ammount: 1000
  }
  ],
  transportation: [],
  food: [{name: 'ice cream',
  merchant: 'basking',
  date: 'random date',
  ammount: 10.00
},
{name: 'hot dog',
  merchant: 'restaurant',
  date: 'random date',
  ammount: 50.00
}],
  bills: [{name: 'electricity',
  merchant: 'restaurant',
  date: 'random date',
  ammount: 200.00
}],
  recreation: [],
  essentials: [],
  other: []
}


function App() {
  return (
    <div id="App">
      <Navbar />
      <div id="components">
        <PieChartGraph expenses={expenses}></PieChartGraph>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
