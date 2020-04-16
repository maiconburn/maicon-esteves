import React from 'react'
import Button from '@material-ui/core/Button'
import LayoutIndex from '../components/LayoutIndex'
import Avatar from '@material-ui/core/Avatar'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'
import { motion, AnimatePresence } from "framer-motion"

function Index(props) {
    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100,
      when: "afterChildren"
    }
    return (
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="page-transition-container"
          >
            <LayoutIndex>
              <div className="wrapper">
                <div className="introduction">
                  <div className="content-introduction">
                    <Avatar className="avatar" alt="Profile Picture" size="large" src="/img/maicon.png" />
                    <hgroup>
                      <h1 align="center">Hello, I'm <span>Maicon Esteves</span></h1>
                      <h2 align="center">I'm a full-stack developer</h2>
                    </hgroup>
                    <div className="bt-index">
                      <Button variant="outlined" size="large" color="secondary" href="home" endIcon={<ArrowForwardIosOutlinedIcon />}>View my work</Button>
                    </div>
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