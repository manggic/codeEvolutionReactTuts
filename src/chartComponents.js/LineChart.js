import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020",
        data: [3, 1, 2, 1, 2],
        backgroundColor: "blue",
        borderColor: "grey",
        pointBackgroundColor: "black",
        // pointBorderColor: "blue",
      },
      {
        label: "Sales for 2021",
        data: [1, 2, 3, 3, 4],
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Line Title",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1,
      },
    },
  };

  return (
    <div style={{ height: "200px", width: "70%", margin: "auto" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
