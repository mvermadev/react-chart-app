import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import RadarChart from './components/RadarChart';
import DoughnutChart from './components/DoughnutChart';
import PolarChart from './components/PolarChart';
import BubbleChart from './components/BubbleChart';
import Header from './components/Header';

function App() {
  return (
    <div>
    <h2>Chart.JS</h2>
    <div className="App">
      <div className="charts">
        <div className="chart">
        <LineChart/>
        </div> 
        <div className="chart">
        <BarChart/>
        </div>
        <div className="chart">
        <RadarChart/>
        </div>
        <div className="chart">
        <DoughnutChart/>
        </div>
        <div className="chart">
        <PolarChart/>
        </div>
        <div className="chart">
        <BubbleChart/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
