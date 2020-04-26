import React from 'react'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import NavBar from './NavBar'
import Footer from './Footer'
import Particles from 'react-particles-js'
import css from '../src/css/components/Layout.module.scss'

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
    const styles = css

    return (
      <React.Fragment>
          <Box component="header">
            <NavBar/>
            <Grid className={styles.edgeHeader} container>
              <Particles canvasClassName={styles.particleHeader} params={particleOpt} />
            </Grid>
          </Box>
          <Container maxWidth="lg" className={styles.siteContainer}>
            <Paper elevation={5} className={styles.contentPaper}>
              <Box p={'4vw'}>
                <Hidden smUp>
                  <Box className={styles.pageTitle}>
                    <Typography align="center" variant="h4" component="h1">
                      {props.pageTitle}
                    </Typography>
                    <Typography align="center" variant="subtitle1" component="h2">
                      {props.pageSubTitle}
                    </Typography>
                  </Box>
                </Hidden>
                <Hidden xsDown>
                  <Box className={styles.pageTitle}>
                    <Typography align="center" variant="h3" component="h1">
                      {props.pageTitle}
                    </Typography>
                    <Typography align="center" variant="subtitle1" component="h2">
                      {props.pageSubTitle}
                    </Typography>
                  </Box>
                </Hidden>
                <Box width="100%">
                  {props.children}
                </Box> 
              </Box>
            </Paper>
          </Container>
          <Footer />
      </React.Fragment>
    )
}
export default Layout