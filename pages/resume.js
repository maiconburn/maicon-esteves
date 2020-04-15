import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from "@material-ui/core/Container"
import Navbar from '../components/NavBar'
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { PDFObject } from 'react-pdfobject'

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
        <React.Fragment>
            <header>
            <Navbar/>
            </header>
            <Container fixed>
                <Grid item xs={12} spacing={5} className={classes.title}>
                <Typography align="center" variant="h3" component="h1">
                    About Me
                </Typography>
                <Typography align="center" variant="subtitle1" component="h2">
                    subtitle
                </Typography>
                </Grid>
                <Grid container xs={12}>
                    <PDFObject className={classes.pdfobject} url="/pdf/developer.pdf" width="800px" height="1200px" />
                </Grid>
            </Container>
        </React.Fragment>           
    )
}
 
export default Resume