import React from 'react'
import Particles from 'react-particles-js'

export default class Layout extends React.Component{
  render(){
    const myProp = this.props
    const particleOpt = {
      particles: {
        number: {
          value: 70,
          density: {
            enable: false,
            value_area: 800
          },
          move: {
            enable: true,
            speed: 1
          }
        }
      },
      interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: ["push"]
            }
        }
      }
    }
    return(
      <React.Fragment>
        <Particles canvasClassName="particle-canvas" params={particleOpt} />
        {myProp.children}
      </React.Fragment>
    )
  }
}