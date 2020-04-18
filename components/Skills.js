import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import ProgressBar from '../components/ProgressBar'
import Chip from '@material-ui/core/Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3)
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(5),
        color: theme.palette.text.secondary,
    },
    progressbar: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    chip:{
        marginRight: '5px',
        marginLeft: '5px',
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '15px',
        background: '#2274A5',
        color: '#FFFFFF'
    },
    icon:{
        marginLeft: '10px',
        color: '#FFFFFF'
    }
}))

function Test() {
    const classes = useStyles()
    return (            
    <Paper xs container variant="outlined" square elevation={0} className={classes.paper}>
        <Grid xs container direction="row" justify="center" alignItems="center">
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>HTML & CSS</span>
                    <ProgressBar progress={90} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>JavaScript</span>
                    <ProgressBar progress={75} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>PHP</span>
                    <ProgressBar progress={70} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>React</span>
                    <ProgressBar progress={60} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>MySQL</span>
                    <ProgressBar progress={80} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Node.js</span>
                    <ProgressBar progress={50} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>MongoDB</span>
                    <ProgressBar progress={60} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Node.js</span>
                    <ProgressBar progress={90} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Linux</span>
                    <ProgressBar progress={80} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>MongoDB</span>
                    <ProgressBar progress={50} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>React</span>
                    <ProgressBar progress={60} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Node.js</span>
                    <ProgressBar progress={90} />
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Chip label="Linux" className={classes.chip} icon={<FontAwesomeIcon size="md" className={classes.icon} icon={faHashtag} />} />
                <Chip label="Google Analytcs" className={classes.chip} icon={<FontAwesomeIcon size="md" className={classes.icon} icon={faHashtag} />} />
                <Chip label="SEO" className={classes.chip} icon={<FontAwesomeIcon size="md" className={classes.icon} icon={faHashtag} />} />
                <Chip label="Docker" className={classes.chip} icon={<FontAwesomeIcon size="md" className={classes.icon} icon={faHashtag} />} />
            </Grid>
        </Grid>
    </Paper> 
    )
}
 
export default Test