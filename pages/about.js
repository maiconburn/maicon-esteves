import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
//import Layout from '../components/Layout'
import Skills from '../components/Skills'
import RadarChart from '../components/RadarChart'
import { motion, useAnimation } from "framer-motion"
import css from '../src/css/pages/about.module.scss'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layout'), {ssr:false})

function Home() {
    
    const controls = useAnimation()

    React.useEffect(() => {
      controls.start(i => ({
        scale: [0,1],
        opacity: [0,1],
        transition: { delay: i * 0.4 },
      }))
    }, [])

    const styles = css
    return (
      <Layout pageTitle="About Me & My Skills" pageSubTitle="A small introduction about myself and my skills">
          <Box container lg={12} >
            <Box item mb={5}>
              <Grid item container lg={12} className={styles.personality}>
                <Grid item lg={3} sm={3} xs={6}>
                  <motion.div custom={0} animate={controls}>
                    <img src="/svg/programmer.svg" width="50%" />
                  </motion.div>
                  <Typography align="center" variant="h4" component="h4">
                    <motion.div custom={0} animate={controls}>
                      Technical
                    </motion.div>
                  </Typography>
                </Grid>
                <Grid item lg={3} sm={3} xs={6}>
                  <motion.div custom={1} animate={controls}>
                    <img src="/svg/creative.svg" width="50%" />
                  </motion.div>
                  <Typography align="center" variant="h4" component="h4">
                    <motion.div custom={1} animate={controls}>
                      Creative
                    </motion.div>
                  </Typography>
                </Grid>
                <Grid item lg={3} sm={3} xs={6}>
                  <motion.div custom={2} animate={controls}>
                    <img src="/svg/analytics.svg" width="50%" />
                  </motion.div>
                  <Typography align="center" variant="h4" component="h4">
                    <motion.div custom={2} animate={controls}>
                      Analytical
                    </motion.div>
                  </Typography>
                </Grid>
                <Grid item lg={3} sm={3} xs={6}>
                  <motion.div custom={3} animate={controls}>
                    <img src="/svg/entrepreneur.svg" width="50%" />
                  </motion.div>
                  <Typography align="center" variant="h4" component="h4">
                    <motion.div custom={3} animate={controls}>
                      Entrepreneur
                    </motion.div>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Grid container lg={12}>
            <Grid item lg={7} >
              <Typography variant="body1" component="p">
              Graduated in Marketing and Technical Training in Software Development from Unopar - University of Northern Paraná.<br />
              Collaborated in projects for large companies clients recognized brands in the Brazilian market such as <Link href="http://www.box1824.com.br/" target="_blank">BOX1824</Link>, <Link href="http://yoagencia.digital/" target="_blank">Agencia Yo</Link>, <Link href="https://www.briviadez.com.br/" target="_blank">BriviaDez</Link>, <Link href="http://www.sapientag2.com.br/" target="_blank">Sapient AG2</Link>, <Link href="https://www.mjvinnovation.com/" target="_blank">MJV Technology & Innovation</Link>, <Link href="http://www.cubo.cc/" target="_blank">CUBOCC</Link>, and others.<br />
              I believe that serving humanity is the best work one can do in their lifetime. Therefore, I try to be an active citizen. Some of such initiatives are listed below:<br />
              </Typography>
              <Box my={1}><Typography variant="h5" component="h5">As a business owner:</Typography></Box>
              <Box my={1}><Typography variant="body1" component="p"><strong>I am a founding member of two companies:</strong></Typography></Box>
              <Typography variant="body1" component="p">
              <strong>Invalley Innovation and Design:</strong> consulting in innovation through the design, development of products, services, and strategies that improve people's lives.<br />
              <strong>Adeus Rotina:</strong>A secret box for couples, which delivers a different romantic or sexual experience every month in a surprise box.<br />
              In both of these companies, I am in charge of marketing and technology.
              </Typography>
            </Grid>
            <Grid item container lg={5}>
              <Hidden mdDown>
                <Grid item lg={12}>
                  <RadarChart chartSize={140} chartHeight={360} chartTitle={'My full-stack skills distributed'} />
                </Grid>
              </Hidden>
            </Grid>
            <Grid item lg={12}>
              <Box my={1}><Typography variant="h5" component="h5">As a Teacher:</Typography></Box>
              <Typography variant="body1" component="p">
              I taught a one-year technical computer course on web programming.<br />
              I'm a Tae Kwon Do Black Belt 2nd Dan.<br />
              Participated from 1998 to present.<br />
              Part of my home state Gaucho Taekwondo team for The Federação Gaúcha de Taekwondo (FGTKD)<br />
              I participated in two Brazilian National Championships.<br />
              Taught seven years of Tae Kwon Do classes for children and teens 4-15 years. I developed my students in leadership, humility, perseverance, respect, altruism, self-control and more. These classes were free of charge because I wanted to give back to the community.
              </Typography>
              <Box my={1}><Typography variant="h5" component="h5" className={styles.titleVolunteer}>As a volunteer:</Typography></Box>
              <Typography variant="body1" component="p">
              Participated in Sonhar Acordado, an NGO, which aims to transfer positive values ​to underprivileged children.<br />
              I was a consultant in Junior Achievement, a project that teaches teenagers to create their own companies.<br />
              A member of Junior Chamber International, an NGO which seeks to develop and engage in various projects that have a positive impact on people's lives.<br />
              I hope I am able to convey how I see the world and how I am helping to make it a better place.<br /> 
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Hidden lgUp>
                <Box mt={5}>
                  <RadarChart chartTitle={'My full-stack skills distributed'} chartSize={70} chartHeight={250} />
                </Box>
              </Hidden>
              <Box my={3} mx={'auto'}>
                <Skills />
              </Box>
            </Grid>
          </Grid>
      </Layout>
    )
}

export default Home