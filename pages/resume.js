import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import Grid from "@material-ui/core/Grid"
import CvChat from "../components/CvChat"


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3)
    },
    pdfobject:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))


function Resume() {
    const classes = useStyles()
    return (
        <Layout>
            <Grid container lg={12}>
                <CvChat />
            </Grid>
        </Layout>           
    )
}
 
export default Resume