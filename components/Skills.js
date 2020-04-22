import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
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
        background: '#030957',
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
                    <span>HTML</span>
                    <ProgressBar progress={90} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>CSS</span>
                    <ProgressBar progress={90} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Javascript</span>
                    <ProgressBar progress={80} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>React</span>
                    <ProgressBar progress={75} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Node.js</span>
                    <ProgressBar progress={60} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Next.js</span>
                    <ProgressBar progress={70} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>PHP</span>
                    <ProgressBar progress={60} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Wordpress</span>
                    <ProgressBar progress={70} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>MongoDB</span>
                    <ProgressBar progress={60} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>MySQL</span>
                    <ProgressBar progress={60} />
                </Grid>
            </Grid>
            <Grid xs={12} item container>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Digital Marketing</span>
                    <ProgressBar progress={95} />
                </Grid>
                <Grid item md xs={12} className={classes.progressbar}>
                    <span>Growth Hacking</span>
                    <ProgressBar progress={90} />
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Box mt={2}>
                    <Chip label="Ux Design" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Google Analytcs" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="SEO" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Photoshop" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Cloud Server" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Ubuntu" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="CentOS" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Google Ads" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="AI" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Facebook Ads" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Marketing Automation" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Entrepreneurship" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Statups" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Lean Startup" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Chatbot" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                    <Chip label="Design Thinking" className={classes.chip} icon={<FontAwesomeIcon size="1x" className={classes.icon} icon={faHashtag} />} />
                </Box>
            </Grid>
        </Grid>
    </Paper> 
    )
}
 
export default Test