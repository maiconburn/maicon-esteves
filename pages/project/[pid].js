import React from 'react'
//import Layout from '../../components/Layout'
import PortfolioDetails from '../../components/PortfolioDetails'
import Grid from "@material-ui/core/Grid"
import { useRouter } from 'next/router'
import JOB_QUERY from "../../apollo/queries/job/job"
import Query from "../../components/api/Query" 
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../components/Layout'), {ssr:false})


function Project() {

    const router = useRouter()
    const { pid } = router.query
    return (
        <Layout pageTitle="Projects & developments" pageSubTitle="This is one of the projects I developed, I hope you enjoy it :D">
            <Grid container justify="space-between" alignItems="center" direction="row">
                <Grid item>
                    <Query query={JOB_QUERY} id={pid}>
                    {({ data: { job } }) => {
                        return (
                        <PortfolioDetails job={job} />
                        )
                    }}
                    </Query>
                </Grid>
            </Grid>
        </Layout>           
    )
}
 
export default Project