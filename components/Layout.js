import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import NavBar from './NavBar'
import Particles from 'react-particles-js'

const particleOpt = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: false,
        value_area: 500
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

function Layout(props) {
    return (
      <React.Fragment>
        <Box component="header">
          <NavBar/>
          <Grid className="edge-header" container lg={12}>
            <Particles canvasClassName="particle-header" width="100%" params={particleOpt} />
          </Grid>
        </Box>
        <Container maxWidth="lg">
            {props.children}
        </Container> 
      </React.Fragment>
    )
}
export default Layout