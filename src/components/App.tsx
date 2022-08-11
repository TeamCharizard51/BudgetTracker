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
<<<<<<< HEAD
      <div id='pieChart' style={{width: '400px', height: '400px'}}>
        <PieChart
          animate
          animationDuration={500}
          animationEasing="ease-out"
          center={[50, 50]}
          data={[
            {
              color: "#E38627",
              title: "One",
              value: 10,
            },
            {
              color: "#C13C37",
              title: "Two",
              value: 15,
            },
            {
              color: "#6A2135",
              title: "Three",
              value: 20,
            },
          ]}
          labelPosition={50}
          label={({ dataEntry }) => dataEntry.value + `%` + dataEntry.title}
          labelStyle={{...defaultLabelStyle}}
          radius={50}
          viewBoxSize={[100, 100]}
        />
        </div>
=======
        <PieChartGraph expenses={expenses}></PieChartGraph>
>>>>>>> dev
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
