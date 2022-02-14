import React, {Component} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


class EventChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'VOLTAGE ACCEPTANCE CRITERIA',
          },
        },
      },
      
      data : {
        labels:[0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: 'LVRT',
            data: [0, 1, 2, 3, 4, 7],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'HVRD',
            data: [0, 1, 2, 3, 4, 11],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    }; 

    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  

    
  }

  render() {
    return (<Line options={this.state.options} data={this.state.data}/>);
    }
  }

export default EventChart