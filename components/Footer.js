import React from 'react'
import Link from 'next/link'
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'

function Footer() {
    const current_date = new Date()
    const year = current_date.getFullYear()
    return (
        <Box component="footer" className="footer-int" xs={12}>
            <Grid xs={12} container>
                <Grid item xs={6}>
                    <Grid item xs={12} component="p">
                        Copyright © {year} - <Link href="index" target="_blank">Maicon Esteves</Link>
                    </Grid> 
                </Grid>
                <Grid item xs={6} justify="flex-end" container>
                    <IconButton
                    edge="end"
                    target="_blank"
                    className="git-btn"
                    href="https://github.com/maiconburn"
                    color="inherit"
                    >
                        <GitHubIcon />
                        <p>GitHub Repository</p>
                    </IconButton>
                    
                </Grid>
            </Grid>
        </Box>
    )
}
export default Footer