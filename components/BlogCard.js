import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '15px'
  },
  media: {
    backgroundSize: 'cover',
    backgroundPosition: 'top left',
    height: 250,
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
        <Card className={classes.root} elevation={5}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    )
}
export default BlogCard