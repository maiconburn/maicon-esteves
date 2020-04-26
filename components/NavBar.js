import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MoreIcon from '@material-ui/icons/MoreVert'
import Avatar from '@material-ui/core/Avatar'
import ButtonActive from '../components/ButtonActive'
import ButtonMobileActive from '../components/ButtonMobileActive'
import css from '../src/css/components/NavBar.module.scss'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

function Navbar() {
  const styles = css
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ButtonMobileActive className={styles.buttonMobileActive} color="inherit" href="/about">
          About Me
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <ButtonMobileActive className={styles.buttonMobileActive} color="inherit" href="/resume">
          Curriculum
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <ButtonMobileActive className={styles.buttonMobileActive} color="inherit" href="/portfolio">
          Portfolio
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <Button className={styles.buttonActive} color="inherit" target="_blank" href="https://blog.maicon-esteves.tk">
          Blog
        </Button>
      </MenuItem>
      <MenuItem>
        <ButtonMobileActive className={styles.buttonMobileActive} color="inherit" href="/contact">
          Contact
        </ButtonMobileActive>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            href="/index"
          >
            <Avatar alt="Maicon Esteves" src="/img/maicon.png" />
          </IconButton>
          <Button edge="start" color="inherit" href="/" >
            <Typography variant="h6" className="MuiTypography-noWrap">
                Portfolio - Maicon Esteves
            </Typography>
          </Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ButtonActive className={styles.buttonActive} color="inherit" href="/about">
              About Me
            </ButtonActive>
            <ButtonActive className={styles.buttonActive} color="inherit" href="/resume">
              Resume
            </ButtonActive>
            <ButtonActive className={styles.buttonActive} color="inherit" href="/portfolio">
              Portfolio
            </ButtonActive>
            <Button className={styles.buttonActive} color="inherit" target="_blank" href="https://blog.maicon-esteves.tk">
              Blog
            </Button>
            <ButtonActive className={styles.buttonActive} color="inherit" href="/contact">
              Contact
            </ButtonActive>
            <IconButton
              color="inherit"
              className={styles.buttonIcon}
              target="_blank"
              href="https://www.linkedin.com/in/maiconburn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              edge="end"
              className={styles.buttonIconLast}
              target="_blank"
              href="https://github.com/maiconburn"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      
    </div>
  )
}

export default Navbar