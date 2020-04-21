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

function Portfolio() {
    const classes = useStyles()
    return (
        <Layout pageTitle="Portfolio" pageSubTitle="Learn more about my work" className={classes.root}>   
            <Grid container justify="space-between" alignItems="center" direction="row">
                <Grid xs={12} sm={6} lg={4} item>
                    <BlogCard imageUrl="/img/hopihari.jpg" />
                </Grid>
                <Grid xs={12} sm={6} lg={4} item>
                    <BlogCard imageUrl="/img/sosbikini.jpg" />
                </Grid>
                <Grid xs={12} sm={6} lg={4} item>
                    <BlogCard imageUrl="/img/blend.jpg" />
                </Grid>
                <Grid xs={12} sm={6} lg={4} item>
                    <BlogCard imageUrl="/img/quemdisseberenice.jpg" />
                </Grid>
            </Grid>
        </Layout>           
    )
}
 
export default Portfolio