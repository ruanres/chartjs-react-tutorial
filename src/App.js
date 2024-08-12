import React from "react";
import "./App.css";
import "chart.js/auto";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

const userData = {
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h2>Charts</h2>
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
