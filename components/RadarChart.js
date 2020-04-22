import React, { Component } from "react"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {ssr:false})

class RadarChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [{
        name: 'Teste',
        data: [8, 7, 9, 8, 6, 6],
      }],
      options: {
        chart: {
          toolbar: {
            show: true
          },
          type: 'radar',
        },
        title: {
          text: props.chartTitle
        },
        fill: {
          opacity: 0.7,
          colors: ['#03092d']
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#03092d'],
          dashArray: 0
        },
        markers: {
          size: 5,
          colors: ['#03092d'],
          hover: {
            size: 10
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#03092d']
          }
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
          categories: ['Frontend', 'Backend', 'Marketing', 'Project Manager', 'Database', 'DevOps']
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
        height={this.props.chartHeight}
      />
    )
  }
}

export default RadarChart