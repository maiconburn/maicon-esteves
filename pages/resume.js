import React from 'react'
import Layout from '../components/Layout'
import VerticalTimeline from '../components/VerticalTimeline'
import css from '../src/css/pages/timeline.module.scss'


function Pdf() {
    const styles = css
    return (
        <Layout pageTitle="Work experience & Education" className={styles.LayoutTimeLine} pageSubTitle="My previous jobs, awards and my qualifications. You can also download my resume at this link"> 
            <VerticalTimeline />  
        </Layout>         
    )
}
 
export default Pdf