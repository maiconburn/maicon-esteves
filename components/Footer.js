import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import Typography from '@material-ui/core/Typography'

function Footer() {
    const current_date = new Date()
    const year = current_date.getFullYear()
    return (
        <Box component="footer" className="footer-int" xs={12}>
            <Grid xs={12} container>
                <Grid item xs={6}>
                    <Typography component="p" noWrap>
                        <Button href="index" target="_blank" color="inherit" noWrap>Copyright © {year} <span className="nameAuthor">- Maicon Esteves</span></Button>
                    </Typography>
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