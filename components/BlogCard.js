import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
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
    height: 400,
  }
}))

function BlogCard(props) {
    const classes = useStyles()
    return (
      <motion.div
          animate={{ scale: [0.7, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
      >
        <Link href="/portfolio-item">
          <a>
          <Card className={classes.root} elevation={5}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // eslint-disable-next-line react/prop-types
                image={props.imageUrl}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          </a>
        </Link>
      </motion.div>
    )
}
export default BlogCard