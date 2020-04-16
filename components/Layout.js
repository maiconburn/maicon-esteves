import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import NavBar from './NavBar'
import Footer from './Footer'
import Particles from 'react-particles-js'
import { motion, AnimatePresence } from "framer-motion"

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

    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    }

    return (
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 0.2 }}
            exit={{ opacity: 0 }}
            id="page-transition-container"
          >
            <Box component="header">
              <NavBar/>
              <Grid className="edge-header" container xs={12}>
                <Particles canvasClassName="particle-header" width="100%" params={particleOpt} />
              </Grid>
            </Box>
            <Container maxWidth="lg">
                {props.children}
            </Container>
            <Footer />
          </motion.div>
        </div> 
      </AnimatePresence>
    )
}
export default Layout