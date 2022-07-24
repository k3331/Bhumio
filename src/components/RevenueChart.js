import React from 'react'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'

function RevenueChart({projects}) {

  let label = projects.slice(0,4).map((pro) =>pro.project)
  let price = projects.slice(0,4).map((pro) =>pro.price)
  const data = {
  labels: label,
  datasets: [
    {
      label: "First dataset",
      data:price,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },

  ]
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}
  return (
    <div style={{height:'40vh',width:'50vw'}}>
    <Line data={data} options={options} width={400} height={150} /> 
    </div>
  )
}

export default RevenueChart