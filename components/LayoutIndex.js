import React from 'react'
import Particles from 'react-particles-js'
import Footer from './Footer'
import NextNprogress from 'nextjs-progressbar'
import css from '../src/css/components/LayoutIndex.module.scss'

class Layout extends React.Component{
  render(){
    const myProp = this.props
    const styles = css
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
        <NextNprogress
          color="#6600aa"
          startPosition="0.3"
          stopDelayMs="700"
          height="8"
        />
        <Particles canvasClassName={styles.particleCanvas} params={particleOpt} />
        {myProp.children}
        <div className={styles.indexFooter}>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Layout