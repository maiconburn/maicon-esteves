import React from 'react'
import Button from '@material-ui/core/Button'
import Particles from 'react-particles-js'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const particleOpt = {
  particles: {
    number: {
      value: 100,
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

function Index(props) {
    return (
      <React.Fragment>
        <Particles canvasClassName="particle-canvas" params={particleOpt} />
        <Grid className="wrapper" item xs={6} sm container>
          <div className="introduction">
            <Avatar alt="Profile Picture" size="large" src="/img/maicon.png" />
            <hgroup>
              <h1 className="hello">Hello, I'm <span>Maicon Esteves</span></h1>
              <h2 className="hello">I'm a full-stack developer</h2>
            </hgroup>
          <Button variant="outlined" size="large" color="secondary" href="home">Default</Button>
          </div>
        </Grid>
      </React.Fragment>
    );
}

export default Index