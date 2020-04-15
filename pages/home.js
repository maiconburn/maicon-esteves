import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Layout from '../components/Layout'
import RadarChart from '../components/RadarChart'


const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3)
  },
  image: {
    display: 'block',
    margin: '0 auto'
  }
}))


function Home() {
    const classes = useStyles()
    return (
      <Layout>
        <Paper elevation={5} className="content-paper">
          <Grid container>
            <Grid item lg={12} sm={12} xs={12} className={classes.title}>
              <Typography align="center" variant="h3" component="h1">
                About Me
              </Typography>
              <Typography align="center" variant="subtitle1" component="h2">
                subtitle
              </Typography>
            </Grid>
            <Grid container lg={12}>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/programmer.svg" width="50%" className={classes.image} />
                <Typography align="center" variant="h4" component="h4">
                  Technical
                </Typography>
              </Grid>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/creative.svg" width="50%" className={classes.image} />
                <Typography align="center" variant="h4" component="h4">
                  Creative
                </Typography>
              </Grid>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/analytics.svg" width="50%" className={classes.image} />
                <Typography align="center" variant="h4" component="h4">
                  Analytical
                </Typography>
              </Grid>
              <Grid item lg={3} sm={3} xs={6}>
                <img src="/svg/entrepreneur.svg" width="50%" className={classes.image} />
                <Typography align="center" variant="h4" component="h4">
                  Entrepreneur
                </Typography>
              </Grid>
            </Grid>
            <Grid item lg={7} sm={6}>
              <p>Graduated in Marketing and Technical Training in Software Development from Unopar - University of Northern Paraná.</p>
              <p>Collaborated in projects for large companies clients recognized brands in the Brazilian market such as <Link href="http://www.box1824.com.br/" target="_blank">BOX1824</Link>, <Link href="http://yoagencia.digital/" target="_blank">Agencia Yo</Link>, <Link href="https://www.briviadez.com.br/" target="_blank">BriviaDez</Link>, <Link href="http://www.sapientag2.com.br/" target="_blank">Sapient AG2</Link>, <Link href="https://www.mjvinnovation.com/" target="_blank">MJV Technology & Innovation</Link>, <Link href="http://www.cubo.cc/" target="_blank">CUBOCC</Link>, and others.</p>
              <p>Tae Kwon Black Belt 2nd Dan.</p>
              <p>Participated from 1998 to present.</p>
              <p>Part of my home state Gaucho Taekwondo team for The Federação Gaúcha de Taekwondo (FGTKD)</p>
              <p>I participated in two Brazilian National Championships.</p>
              <p>I believe that serving humanity is the best work one can do in their lifetime. Therefore, I try to be an active citizen. Some of such initiatives are listed below:</p>
              <p>As a Teacher:</p>
              <p>Taught seven years of Tae Kwon Minister Do classes for children and teens 4-15 years. I developed my students in leadership, humility, perseverance, respect, altruism, self-control and more. These classes were free of charge because I wanted to give back to the community.</p>
            </Grid>
            <Grid item lg={5} sm={6} align="right">
              <RadarChart></RadarChart>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>I taught a one-year technical computer course on web programming.</p>

              <p>As a business owner:</p>

              <p>I am a founding member of two companies:</p>

              <p>Invalley Innovation and Design: consulting in innovation through the design, development of products, services, and strategies that improve people's lives.</p>

              <p>Adeus Rotina: A secret box for couples, which delivers a different romantic or sexual experience every month in a surprise box.</p>

              <p>In both of these companies, I am in charge of marketing and technology.</p>

              <p>As a volunteer:</p>

              <p>Participated in Sonhar Acordado, an NGO, which aims to transfer positive values ​to underprivileged children.</p>

              <p>I consultant in Junior Achievement, a project that teaches teenagers to create their own companies.</p>

              <p>A member of Junior Chamber International, an NGO which seeks to develop and engage in various projects that have a positive impact on people's lives.</p>

              <p>I hope I am able to convey how I see the world and how I am helping to make it a better place.</p> 
            </Grid>
          </Grid>
        </Paper>
      </Layout>
    )
}

export default Home