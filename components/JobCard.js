/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Link from 'next/link'
import { motion } from "framer-motion"

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    margin: '15px'
  },
  media: {
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    height: 290,
  },
  actions:{
    position: 'relative',
    backgroundColor: '#FFF',
  },
  link:{
    textDecoration: 'none'
  }
}))

function JobCard(props) {
    
    const classes = useStyles()
    
    return (
      <motion.div
          animate={{ scale: [0, 1] }}
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: [1, 0.8] }}
          transition={{ duration: 0.3 }}
      >
        <Link href={`/project/${props.job.id}`} as={`/project/${props.job.id}`}>
          <a className={classes.link}>
          <Card className={classes.root} elevation={5}>
            <CardActionArea>
              <CardMedia className={classes.media}>
                <img src={props.job.images.slice(0,1)[0].url} width="100%" />
              </CardMedia>
            </CardActionArea>
            <CardActions className={classes.actions}>
              <Grid xs={12} widht="100%" container>
                <Grid xs={6} item>
                  <Typography variant="Body1" align="left" component="p">
                    <strong>{props.job.title}</strong>
                  </Typography>
                </Grid>
                <Grid xs={6} item>
                  <Typography variant="Body1" align="right" component="p">
                    <strong>{props.job.type}</strong>
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
          </a>
        </Link>
      </motion.div>
    )
}
export default JobCard