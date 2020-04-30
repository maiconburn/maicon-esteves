import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { ApolloProvider } from "@apollo/react-hooks"
import withData from "../utils/apollo"
import 'react-vertical-timeline-component/style.min.css'
import NextNprogress from 'nextjs-progressbar'
import '../src/styles/styles.css'
import Router from "next/router"
import withGA from "next-ga"

const App = ({ Component, pageProps, apollo }) => {

  return (
    <ApolloProvider client={apollo}>
      <NextNprogress
          color="#6600aa"
          startPosition="0.3"
          stopDelayMs="700"
          height="8"
        />
      <Head>
        <title>Maicon Esteves - Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps}/>
      </ThemeProvider>
    </ApolloProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default withGA("UA-33170873-6", Router)(withData(App))
