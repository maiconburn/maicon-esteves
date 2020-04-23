import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ImageSlider from '../components/ImageSlider'
import Chip from '@material-ui/core/Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import css from '../src/css/components/PortfolioDetails.module.scss'


const useStyles = makeStyles((theme) => ({
  chip:{
      marginTop: '10px',
      marginRight: '10px',
      marginLeft: '0px',
      marginBottom: '10px',
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

function PortfolioDetails() {

  const classes = useStyles()

  const styles = css

  return (
    <Grid xs={12} container spacing={2} className={styles.root}>
      <Grid xs={12} item display="flex" justifyContent="flex-start" alignItems="center">
        <Box className={styles.boxImage} pr={3} elevation={3}>
          <ImageSlider />
        </Box>
      </Grid>
      <Grid xs={12} item>
        <Box className={styles.cardContent} elevation={0} px={5}>
          <Typography variant="subtitle1" className={styles.cardSubTitle} component="h5">WEBSITE</Typography>
          <Typography variant="h4" component="h4" className={styles.cardTitle}>Hopi Hari - RED Design de Experiencia</Typography>
          <Typography variant="body1" component="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</Typography>
          <Chip label="Google Ads" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
          <Chip label="Google Ads" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
          <Chip label="Google Ads" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default PortfolioDetails