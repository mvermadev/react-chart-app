import React from 'react';
import {Doughnut} from 'react-chartjs-2'

function DoughnutChart(props) {

    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may'],
        datasets: [
            {
                label: 'Sales of 2020(M)',
                data: [3,5,6,2,1.5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
            }
        ]
    }
    
    const options = {
        title:{
            display: true,
            text: 'Doughnut Chart'
        }
    }

    return (
        <div>
            <Doughnut data={data} options={options}></Doughnut>
        </div>
    );
}

export default DoughnutChart;