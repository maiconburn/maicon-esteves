/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Button from '@material-ui/core/Button'
import LayoutIndex from '../components/LayoutIndex'
import Avatar from '@material-ui/core/Avatar'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'
import { motion, AnimatePresence } from "framer-motion"
import Router from 'next/router'
import css from '../src/css/pages/Index.module.scss'

function Index() {
    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    }
    const styles = css
    return (
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="page-transition-container"
          >
            <LayoutIndex>
              <div className={styles.wrapper}>
                <div className={styles.introduction}>
                  <div className={styles.contentIntroduction}>
                    <Avatar className={styles.avatar} alt="Maicon Esteves's Picture" size="large" src="/img/maicon.png" />
                    <hgroup>
                      <h1 align="center">Hello, I'm <span>Maicon Esteves</span></h1>
                      <h2 align="center">I'm a full-stack developer</h2>
                    </hgroup>
                    <p className={styles.btIndex}>
                      <Button variant="outlined" onClick={() => Router.push('/about')} href="javascript:" size="large" color="secondary" endIcon={<ArrowForwardIosOutlinedIcon />}>View my work</Button>
                    </p>
                  </div>
                </div>
              </div>
            </LayoutIndex>
          </motion.div>
        </div>
      </AnimatePresence>
    )
}

export default Index