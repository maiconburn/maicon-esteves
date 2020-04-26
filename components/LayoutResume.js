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
import Link from 'next/link'
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

function LayoutResume(props) {

    const styles = css

    return (
      <React.Fragment>
        <Box component="header">
          <NavBar/>
          <Grid className={styles.edgeHeader} container xs={12}>
            <Particles canvasClassName={styles.particleHeader} params={particleOpt} />
          </Grid>
        </Box>
        <Container maxWidth="lg" className={styles.siteContainer}>
          <Paper elevation={5} container className={styles.contentPaper}>
            <Box p={'4vw'}>
              <Grid container item xs={12}>
                <Hidden mdUp>
                  <Box item container mb={2} mx={2} width="100%" xs={12} className={styles.pageTitle}>
                    <Typography align="center" variant="h4" component="h1">
                      {props.pageTitle}
                    </Typography>
                    <Typography align="center" variant="subtitle1" component="h2">
                      {props.pageSubTitle} <Link href={props.link} target='_blank'><a>link</a></Link>
                    </Typography>
                  </Box>
                </Hidden>
                <Hidden smDown>
                  <Box item container mb={2} mx={2} width="100%" xs={12} className={styles.pageTitle}>
                    <Typography align="center" variant="h3" component="h1">
                      {props.pageTitle}
                    </Typography>
                    <Typography align="center" variant="subtitle1" component="h2">
                      {props.pageSubTitle} <Link href={props.link} target='_blank'><a>link</a></Link>
                    </Typography>
                  </Box>
                </Hidden>
                <Box item xs={12} width="100%">
                  {props.children}
                </Box>
              </Grid>
            </Box>
          </Paper>
        </Container>
        <Footer />
      </React.Fragment>
    )
}
export default LayoutResume