import React, { Component } from "react"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {ssr:false})

class RadarChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [{
        name: 'Teste',
        data: [4, 2, 3, 4, 5, 6],
      }],
      options: {
        chart: {
          toolbar: {
            show: true
          },
          type: 'radar',
        },
        title: {
          text: 'Radar with Polygon Fill'
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: props.chartSize,
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
      }
    }
  }
  render() {
    return (
      <Chart 
        options={this.state.options} 
        series={this.state.series} 
        type="radar" 
        height={440}
      />
    )
  }
}

export default RadarChart