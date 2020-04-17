import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Layout from '../components/Layout'
import Grid from "@material-ui/core/Grid"
import ProgressBar from '../components/ProgressBar'
import BlogCard from '../components/BlogCard'

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
    }
}))


function Test() {
    const classes = useStyles()
    return (
        <Layout className={classes.root}>
            <Paper elevation={5} className="content-paper">
                <Grid container xs={12}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography align="center" variant="h3" component="h1">
                            About Me
                        </Typography>
                        <Typography align="center" variant="subtitle1" component="h2">
                            subtitle
                        </Typography>
                    </Grid>
                </Grid>
                
                <Paper xs container variant="outlined" square elevation={0} className={classes.paper}>
                    <Grid xs container direction="row" justify="center" alignItems="center">
                        <Grid xs={12} item container>
                            <Grid item xs className={classes.progressbar}>
                                <span>HTML & CSS</span>
                                <ProgressBar progress={90} />
                            </Grid>
                            <Grid item xs className={classes.progressbar}>
                                <span>JavaScript</span>
                                <ProgressBar progress={75} />
                            </Grid>
                        </Grid>
                        <Grid xs={12} item container>
                            <Grid item xs className={classes.progressbar}>
                                <span>PHP</span>
                                <ProgressBar progress={70} />
                            </Grid>
                            <Grid item xs className={classes.progressbar}>
                                <span>React</span>
                                <ProgressBar progress={60} />
                            </Grid>
                        </Grid>
                        <Grid xs={12} item container>
                            <Grid item xs className={classes.progressbar}>
                                <span>MySQL</span>
                                <ProgressBar progress={80} />
                            </Grid>
                            <Grid item xs className={classes.progressbar}>
                                <span>Node.js</span>
                                <ProgressBar progress={50} />
                            </Grid>
                        </Grid>
                        <Grid xs={12} item container>
                            <Grid item xs className={classes.progressbar}>
                                <span>MongoDB</span>
                                <ProgressBar progress={60} />
                            </Grid>
                            <Grid item xs className={classes.progressbar}>
                                <span>Node.js</span>
                                <ProgressBar progress={90} />
                            </Grid>
                        </Grid>
                        <Grid xs={12} item container>
                            <Grid item xs className={classes.progressbar}>
                                <span>Linux</span>
                                <ProgressBar progress={80} />
                            </Grid>
                            <Grid item xs className={classes.progressbar}>
                                <span>MongoDB</span>
                                <ProgressBar progress={50} />
                            </Grid>
                        </Grid>
                        <Grid xs={12} item container>
                            <Grid item xs className={classes.progressbar}>
                                <span>React</span>
                                <ProgressBar progress={60} />
                            </Grid>
                            <Grid item xs className={classes.progressbar}>
                                <span>Node.js</span>
                                <ProgressBar progress={90} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid xs container>
                    <Grid xs={3} item>
                        <BlogCard />
                    </Grid>
                    <Grid xs={3} item>
                        <BlogCard />
                    </Grid>
                    <Grid xs={3} item>
                        <BlogCard />
                    </Grid>
                </Grid>
            </Paper>
        </Layout>           
    )
}
 
export default Test