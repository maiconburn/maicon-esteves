import React, { Component } from "react"

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {ssr:false})

class RadarChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [{
        name: 'Series 1',
        data: [4, 2, 3, 4, 5, 6],
      }],
      options: {
        chart: {
          toolbar: {
            show: false
          },
          height: 350,
          type: 'radar',
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColor: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff']
              }
            }
          }
        },
        xaxis: {
          categories: ['Frontend', 'Backend', 'Server', 'Marketing', 'Business', 'Management']
        }
      },
    
    
    }
  }

  render() {
    return (
      <Chart 
        options={this.state.options} 
        series={this.state.series} 
        type="radar" 
        height={350} 
      />
    )
  }
}

export default RadarChart