import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import RadarChart from '../components/RadarChart'


const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3)
  },
  image: {
    display: 'block',
    margin: '0 auto'
  },
  personality: {
    padding: '0px 0px 20px 0px',
  },
  titleBusiness: {
    padding: '10px 0px',
  },
  titleTeacher: {
    padding: '0px 0px 10px 0px',
    marginTop: '-30px',
  },
  titleVolunteer: {
    padding: '10px 0px',
  }
}))


function Home() {
    const classes = useStyles()
    return (
      <Layout>
        <Paper elevation={5} className="content-paper">
          <Grid container lg={12} spacing={3}>
            <Grid item lg={12} xs={12} className={classes.title}>
              <Typography align="center" variant="h3" component="h1">
                About Me
              </Typography>
              <Typography align="center" variant="subtitle1" component="h2">
                subtitle
              </Typography>
            </Grid>
            <Grid container lg={12} className={classes.personality}>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/programmer.svg" width="50%" className={classes.image} />
                <Typography align="center" className="icon-description" variant="h4" component="h4">
                  Technical
                </Typography>
              </Grid>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/creative.svg" width="50%" className={classes.image} />
                <Typography align="center" className="icon-description" variant="h4" component="h4">
                  Creative
                </Typography>
              </Grid>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/analytics.svg" width="50%" className={classes.image} />
                <Typography align="center" className="icon-description" variant="h4" component="h4">
                  Analytical
                </Typography>
              </Grid>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/entrepreneur.svg" width="50%" className={classes.image} />
                <Typography align="center" className="icon-description" variant="h4" component="h4">
                  Entrepreneur
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              Graduated in Marketing and Technical Training in Software Development from Unopar - University of Northern Paraná.<br />
              Collaborated in projects for large companies clients recognized brands in the Brazilian market such as <Link href="http://www.box1824.com.br/" target="_blank">BOX1824</Link>, <Link href="http://yoagencia.digital/" target="_blank">Agencia Yo</Link>, <Link href="https://www.briviadez.com.br/" target="_blank">BriviaDez</Link>, <Link href="http://www.sapientag2.com.br/" target="_blank">Sapient AG2</Link>, <Link href="https://www.mjvinnovation.com/" target="_blank">MJV Technology & Innovation</Link>, <Link href="http://www.cubo.cc/" target="_blank">CUBOCC</Link>, and others.<br />
              I believe that serving humanity is the best work one can do in their lifetime. Therefore, I try to be an active citizen. Some of such initiatives are listed below:<br />
              <Typography variant="h4" component="h5" className={classes.titleBusiness}>As a business owner:</Typography>
              <Typography component="p"><strong>I am a founding member of two companies:</strong></Typography>
              <strong>Invalley Innovation and Design:</strong> consulting in innovation through the design, development of products, services, and strategies that improve people's lives.<br />
              <strong>Adeus Rotina:</strong>A secret box for couples, which delivers a different romantic or sexual experience every month in a surprise box.<br />
              In both of these companies, I am in charge of marketing and technology.
            </Grid>
            <Grid item lg={6}>
              <Hidden mdDown>
                <Grid item lg={12}>
                  <RadarChart chartSize={170} />
                </Grid>
              </Hidden>
            </Grid>
            <Grid item container lg={12}>
              <Typography variant="h4" component="h5" className={classes.titleTeacher}>As a Teacher:</Typography>
              I taught a one-year technical computer course on web programming.<br />
              Tae Kwon Black Belt 2nd Dan.<br />
              Participated from 1998 to present.<br />
              Part of my home state Gaucho Taekwondo team for The Federação Gaúcha de Taekwondo (FGTKD)<br />
              I participated in two Brazilian National Championships.<br />
              Taught seven years of Tae Kwon Do classes for children and teens 4-15 years. I developed my students in leadership, humility, perseverance, respect, altruism, self-control and more. These classes were free of charge because I wanted to give back to the community.
              <Typography variant="h4" component="h5" className={classes.titleVolunteer}>As a volunteer:</Typography>
              Participated in Sonhar Acordado, an NGO, which aims to transfer positive values ​to underprivileged children.<br />
              I was a consultant in Junior Achievement, a project that teaches teenagers to create their own companies.<br />
              A member of Junior Chamber International, an NGO which seeks to develop and engage in various projects that have a positive impact on people's lives.<br />
              I hope I am able to convey how I see the world and how I am helping to make it a better place.<br /> 
            </Grid>
            <Grid item lg={12}>
                <Hidden lgUp>
                  <Grid item lg={12}>
                    <RadarChart chartSize={120} />
                  </Grid>
                </Hidden>
                <Skills />
              </Grid>
          </Grid>
        </Paper>
      </Layout>
    )
}

export default Home