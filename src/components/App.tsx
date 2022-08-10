import React from "react";
import MainContainer from "../containers/MainContainer";
import Navbar from "../components/Navbar";
import { PieChart } from "react-minimal-pie-chart";
import './App.css'

const defaultLabelStyle = {
  fontSize: '10px',
  fontFamily: 'sans-serif',
  fill: 'white',
};

function App() {
  return (
    <div id="App">
      <Navbar />
      <div id="components">
      <div id='pieChart' style={{width: '300px', height: '300px'}}>
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
          label={({ dataEntry }) => dataEntry.value + `%`}
          labelStyle={{...defaultLabelStyle}}
          radius={50}
          viewBoxSize={[100, 100]}
        />
        </div>
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
