import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper"
import Layout from '../components/Layout'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Viewer, { Worker } from '@phuocng/react-pdf-viewer'

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

function Resume(PDF) {
    const classes = useStyles()
    return (
        <Layout>
            <Paper elevation={5} className="content-paper">
                <Grid container>
                    <Grid item lg={12} sm={12} xs={12} className={classes.title}>
                        <Typography align="center" variant="h3" component="h1">
                            About Me
                        </Typography>
                        <Typography align="center" variant="subtitle1" component="h2">
                            subtitle
                        </Typography>
                    </Grid>
                    <Grid container lg={12}>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js">
                            <div style={{ height: '750px' }}>
                                <Viewer fileUrl="/pdf/developer.pdf" />
                            </div>
                        </Worker>
                    </Grid>
                </Grid>
            </Paper>
        </Layout>           
    )
}
 
export default Resume