import React from 'react'
import Layout from '../components/Layout'
import VerticalTimeline from '../components/VerticalTimeline'
import css from '../src/css/pages/timeline.module.scss'


function Pdf() {
    const styles = css
    return (
        <Layout pageTitle="Portfolio" className={styles.LayoutTimeLine} pageSubTitle="Learn more about my work"> 
            <VerticalTimeline />  
        </Layout>         
    )
}
 
export default Pdf