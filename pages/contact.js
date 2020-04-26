import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Layout from '../components/Layout'
import Form from '../components/Form'
import css from '../src/css/pages/contact.module.scss'

function Contact() {
    const styles = css
    return (
        <Layout pageTitle="Contact" pageSubTitle="Have a question or want to work together?">   
            <Grid container spacing={4}>
                <Hidden mdUp>
                    <Grid item xs={12} md={4}>
                        <Paper item xs={12} elevation={2} >
                        <Box p={3} mb={0}>
                            <Typography variant="h5" component="h6">Contact Details</Typography>
                            <Typography variant="subtitle1" component="h5">LET`S HAVE A TALK</Typography>

                            <Typography variant="body1" className={styles.name} component="p"><strong>Maicon Esteves</strong></Typography>
                            
                            <Typography variant="body2" className={styles.details} component="p"><a href="https://www.linkedin.com/in/maiconburn/" target="_blank">linkedin.com/in/maiconburn</a></Typography>
                            <Typography variant="body2" className={styles.details} component="p"><a href="https://www.facebook.com/maicon.burn" target="_blank">facebook.com/maicon.burn</a></Typography>
                            <Typography variant="body2" className={styles.details} component="p"><a href="http://github.com/maiconburn" target="_blank">github.com/maiconburn</a></Typography>
                            <Typography variant="body2" className={styles.details} component="p">+447706512894</Typography> 
                            <Typography variant="body1" className={styles.details} component="p"><strong>London - UK</strong></Typography>        
                        </Box>
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8}>
                    <Paper item xs={12} elevation={2} >
                        <Box item p={3} mb={5} xs={12}>
                            <Form />
                        </Box>
                    </Paper>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={12} md={4}>
                        <Paper item xs={12} elevation={2} >
                        <Box p={3} mb={5}>
                            <Typography variant="h5" component="h6">Contact Details</Typography>
                            <Typography variant="subtitle1" component="h5">LET`S HAVE A TALK</Typography>

                            <Typography variant="body1" className={styles.name} component="p"><strong>Maicon Ribeiro Esteves</strong></Typography>
                            
                            <Typography variant="body2" className={styles.details} component="p"><a href="https://www.linkedin.com/in/maiconburn/" target="_blank">linkedin.com/in/maiconburn</a></Typography>
                            <Typography variant="body2" className={styles.details} component="p"><a href="https://www.facebook.com/maicon.burn" target="_blank">facebook.com/maicon.burn</a></Typography>
                            <Typography variant="body2" className={styles.details} component="p"><a href="http://github.com/maiconburn" target="_blank">github.com/maiconburn</a></Typography>
                            <Typography variant="body2" className={styles.details} component="p"><a href="http://whts.co/maicon-esteves" target="_blanck">+447706512894</a></Typography>  
                            <Typography variant="body1" className={styles.details} component="p"><strong>London - UK</strong></Typography>        
                        </Box>
                        </Paper>
                    </Grid>
                </Hidden>
            </Grid>
        </Layout>           
    )
}
 
export default Contact