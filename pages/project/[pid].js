import React from 'react'
import Layout from '../../components/Layout'
import PortfolioDetails from '../../components/PortfolioDetails'
import Grid from "@material-ui/core/Grid"
import { useRouter } from 'next/router'
import JOB_QUERY from "../../apollo/queries/job/job"
import Query from "../../components/api/Query" 


function Project() {

    const router = useRouter()
    const { pid } = router.query

    console.log('Project',pid)
    return (
        <Layout pageTitle="About Me & My Skills" pageSubTitle="A small introduction about myself and my skills">
            <Grid container justify="space-between" alignItems="center" direction="row">
                <Grid item>
                    <Query query={JOB_QUERY} id={pid}>
                    {({ data: { job } }) => {
                        console.log('Job',job)
                        return (
                        <PortfolioDetails jobDetails={job} />
                        )
                    }}
                    </Query>
                </Grid>
            </Grid>
        </Layout>           
    )
}
 
export default Project