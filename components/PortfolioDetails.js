import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import css from '../src/css/components/PortfolioDetails.module.scss'


const useStyles = makeStyles(() => ({
  chip:{
      marginTop: '10px',
      marginRight: '10px',
      marginLeft: '0px',
      marginBottom: '0px',
      fontWeight: 'bold',
      fontSize: '15px',
      background: '#030957',
      color: '#FFFFFF'
  },
  icon:{
      marginLeft: '10px',
      color: '#FFFFFF'
  }
}))

function PortfolioDetails({jobDetails}) {

  const classes = useStyles()

  const styles = css

  console.log('Details',jobDetails)

  const images = jobDetails.images
  const skills = jobDetails.skills

  return (
    <Grid container spacing={2} className={styles.root}>
      <Hidden mdUp>
        <Grid xs={12} md={5} item>
          <Paper elevation={2} className={styles.paperContent}>
            <Box className={styles.boxContent} p={3}>
              <Typography variant="subtitle1" className={styles.boxSubTitle} component="h5">{jobDetails.type}</Typography>
              <Typography variant="h5" component="h4" className={styles.boxTitle}>{jobDetails.title} - {jobDetails.client}</Typography>
              <Typography variant="body1" component="p">{jobDetails.description}</Typography>
              {skills.map((skill, i) => {
                return(
                  <Chip key={i} label={skill} className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                )
              })}
            </Box>
          </Paper>
        </Grid>
      </Hidden>
      <Grid xs={12} md={7} item display="flex">
        
          {images.map((image, i) => {
            return(
              <Paper key={i} className={styles.boxImage} elevation={5}>
                <img width="100%" src={`http://localhost${image.url}`} />
              </Paper>
            )
          })}
      </Grid>
      <Hidden smDown>
        <Grid xs={12} md={5} item>
          <Paper elevation={2} className={styles.paperContent}>
            <Box className={styles.boxContent} p={3}>
              <Typography variant="subtitle1" className={styles.boxSubTitle} component="h5">{jobDetails.type}</Typography>
              <Typography variant="h5" component="h4" className={styles.boxTitle}>{jobDetails.title} - {jobDetails.client}</Typography>
              <Typography variant="body1" component="p">{jobDetails.description}</Typography>
              {skills.map((skill, i) => {
                return(
                  <Chip key={i} label={skill} className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                )
              })}
            </Box>
          </Paper>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default PortfolioDetails