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
  title:{
    textDecoration: 'none'
  }
}))

function BlogCard(props) {
    
  const classes = useStyles()
    const pid = props.jobId
    
    return (
      <motion.div
          animate={{ scale: [0, 1] }}
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: [1, 0.5] }}
          transition={{ duration: 0.5 }}
      >
        <Link href={`/project/${pid}`} as={`/project/${pid}`}>
          <a className={classes.title}>
          <Card className={classes.root} elevation={5}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
              >
                <img src={`https://api-maicon-esteves.herokuapp.com${props.jobImage.url}`} width="100%" />
              </CardMedia>
            </CardActionArea>
            <CardActions className={classes.actions}>
              <Grid xs={12} widht="100%" container>
                <Grid xs={6} item>
                  <Typography variant="Body1" align="left" component="p">
                    <strong>{props.jobTitle}</strong>
                  </Typography>
                </Grid>
                <Grid xs={6} item>
                  <Typography variant="Body1" align="right" component="p">
                    <strong>{props.jobType}</strong>
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
export default BlogCard