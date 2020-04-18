import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Layout from '../components/Layout'
import Grid from "@material-ui/core/Grid"
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
                            Portfolio
                        </Typography>
                        <Typography align="center" variant="subtitle1" component="h2">
                            subtitle
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid xs container justify="space-between" alignItems="center" direction="row">
                    <Grid xs={4} item>
                        <BlogCard imageUrl="/img/hopihari.jpg" />
                    </Grid>
                    <Grid xs={4} item>
                        <BlogCard imageUrl="/img/sosbikini.jpg" />
                    </Grid>
                    <Grid xs={4} item>
                        <BlogCard imageUrl="/img/blend.jpg" />
                    </Grid>
                    <Grid xs={4} item>
                        <BlogCard imageUrl="/img/quemdisseberenice.jpg" />
                    </Grid>
                </Grid>
            </Paper>
        </Layout>           
    )
}
 
export default Test