import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/LayoutChat'
import Grid from "@material-ui/core/Grid"
import CvChat from "../components/CvChat"

function ChatBot() {
    return (
        <Layout>
            <Grid container lg={12}>
                <CvChat />
            </Grid>
        </Layout>           
    )
}
 
export default ChatBot