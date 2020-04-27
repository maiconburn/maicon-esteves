import React from 'react'
import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import JobCard from '../components/JobCard'
import Query from "../components/api/Query"  
import JOBS_QUERY from '../apollo/queries/job/jobs'
import css from '../src/css/pages/portfolio.module.scss'


function Portfolio() {
    const styles = css
    return (
        <Layout pageTitle="Projects & developments" pageSubTitle="Showcase of my latest works, projects and developments." className={styles.root}>   
            <Grid container justify="space-between" alignItems="center" direction="row">
                <Grid xs={12} align="center" container>
                    <Query query={JOBS_QUERY} id={null}>
                        {({ data: { jobs } }) => {
                            return(
                                <>
                                    {jobs.map(({id, title, type, company, client, skills, description, images}) => {
                                        //console.log(images[0])
                                        return (
                                            // eslint-disable-next-line react/jsx-key
                                            <Grid lg={4} md={6} xs={12} item>
                                                <JobCard jobTitle={title} jobType={type} jobId={id} jobImage={images[0]} jobImages={images} jobClient={client} jobSkills={skills} jobDescriptiom={description} jobCompany={company} />
                                            </Grid>
                                        )
                                    })} 
                                </>
                            ) 
                        }} 
                    </Query>
                </Grid>        
            </Grid>
        </Layout>           
    )
}
 
export default Portfolio