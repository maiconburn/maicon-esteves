import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import Form from '../components/Form'

function Contact() {
    return (
        <Layout pageTitle="Contact" pageSubTitle="Have a question or want to work together?">   
            <Grid item xs={12}>
                <Paper item xs={12} elevation={2} >
                    <Box item p={3} mb={8} xs={12}>
                        <Form />
                    </Box>
                </Paper>
            </Grid>
        </Layout>           
    )
}
 
export default Contact