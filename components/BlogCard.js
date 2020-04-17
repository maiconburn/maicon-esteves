import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "auto",
    marginBottom: 8
  },
  card: {
    boxShadow: theme.shadows[2]
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  title: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark
    },
    "&:active": {
      color: theme.palette.primary.dark
    }
  },
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  showFocus: {
    "&:focus span": {
      color: theme.palette.secondary.dark
    }
  }
}))

function BlogCard() {
    const classes = useStyles()
    return (
      <Card className={classes.card}>
        <Link href="" tabIndex={-1}>
          <img src="/img/maicon.png" className={classes.img} alt="" />
        </Link>
        <Box>
          <Typography variant="body2" color="textSecondary">
            25/03/1984
          </Typography>
          <Link
            className={classes.showFocus}
          >
            <Typography variant="h6">
              <span className={classes.title}>Teste</span>
            </Typography>
          </Link>
          <Typography variant="body1" color="textSecondary">
            <Link className={classes.noDecoration} tabIndex={-1}>
              <span className={classes.link}> read more...</span>
            </Link>
          </Typography>
        </Box>
      </Card>
    )
}
export default BlogCard