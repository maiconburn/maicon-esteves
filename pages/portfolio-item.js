import React from 'react'
import Layout from '../components/Layout'
import PortfolioDetails from '../components/PortfolioDetails'
import Grid from "@material-ui/core/Grid"


function Test() {
    return (
        <Layout pageTitle="About Me & My Skills" pageSubTitle="A small introduction about myself and my skills">
            <Grid container justify="space-between" alignItems="center" direction="row">
                <Grid xs={12} container>
                    <PortfolioDetails />
                </Grid>
            </Grid>
        </Layout>           
    )
}
 
export default Test