import React from "react";
import { PieChart } from "react-minimal-pie-chart";




function PieChartGraph(props) {

  const defaultLabelStyle = {
    fontSize: '6px',
    fontFamily: 'sans-serif',
    fill: 'white',
  };
  //colors for the 6 different types of expenses
  const colors = ["#27AE60", "#2980B9","#8E44AD", "#F1C40F", "#E74C3C","1ABC9C","E67E22"];
  //create data from expenses
  //input expenses
  //output: array of objectes with key color, title, and value
  let defaultData = [{
    color: "95A5A6",
    title: 'none',
    value: 0,
  }]
  function createPieData(expenses) {
    //let totalofExp = 0;
    const pieData:any = [];
    let i = 0;
    for(const expense in expenses) {
      const combineExpense = {color:colors[i], value: 0, title:`${expense}`}
      const arrIndividual = [...expenses[expense]];
      if(arrIndividual.length) {
        for(let j = 0; j < arrIndividual.length; j++) {
          combineExpense.value += arrIndividual[j].ammount;
       }
      }
      console.log('combineExpence', combineExpense)
      pieData.push(combineExpense);
      console.log(pieData)
      //totalofExp += pieData.slice(0)[i].value;
      i++;
    }
    //console.log(totalofExp)
    console.log(pieData)
    //let totalofExp = 0;
    return pieData
  }

  let dataExp = createPieData(props.expenses);

  let totally = 0;
  dataExp.forEach(el => {
    totally += el.value
  })
  console.log('dataExp', dataExp)
  console.log(totally)

  if(totally === 0) dataExp = defaultData;
  
  for(let index = 0; index < dataExp.length; index++){
    dataExp[index].value = Math.ceil((dataExp[index].value/totally * 100));
  }

  const data = dataExp.filter(el => el.value > 0)
  console.log(data)

  /*
  [
        {
          color: "#E38627",
          title: "One",
          value: 10,
        },
        {
          color: "#C13C37",
          title: "Two",
          value: 111,
        },
        {
          color: "#6A2135",
          title: "Three",
          value: 20,
        },
      ]
  */

  return (
    <div id='pieChart' style={{width: '300px', height: '300px'}}>
    <PieChart
      animate
      animationDuration={500}
      animationEasing="ease-out"
      center={[50, 50]}
      data={data}
      labelPosition={50}
      label={({ dataEntry }) => dataEntry.title+ ' ' +dataEntry.value + `%`}
      labelStyle={{...defaultLabelStyle}}
      radius={50}
      viewBoxSize={[100, 100]}
    />
    </div>
  )
}

export default PieChartGraph;