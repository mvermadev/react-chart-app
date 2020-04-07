import React from 'react';
import {Radar} from 'react-chartjs-2'

function RadarChart(props) {

    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may'],
        datasets: [
            {
                label: 'Sales of 2020(M)',
                data: [3,5,6,2,1.5],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                pointBackgroundColor: 'rgba(149, 96, 235)',
                pointBorderColor: 'rgba(240, 91, 143)',
                borderWidth: 1
            },
            {
                label: 'Sales of 2019(M)',
                data: [5,6,2,7,1],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                pointBackgroundColor: 'rgba(130, 163, 20)',
                pointBorderColor: 'rgba(110, 112, 101)',
                borderWidth: 1  
            },
        ]
    }

    const options = {
        title : {
            display: true,
            text : 'Radar Chart'
        },
        scale:{
            angleLines:{
                display : true
            },
            ticks : {
                suggestMin: 0,
                suggestMax : 100
            }
        }
    }

    return (
        <div>
           <Radar data={data} options={options}></Radar> 
        </div>
    );
}

export default RadarChart;  