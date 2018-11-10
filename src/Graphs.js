import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'

class Graphs extends Component {
  render() {
    return (
      <div style={{width: '500px'}}>
        <Bar
          data= {{labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2478,5267,734,784,433]
            }
          ]}}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
      
    );
  }
}

export default Graphs;
