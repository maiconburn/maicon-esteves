import React from 'react'
import Layout from '../components/Layout'
import VerticalTimeline from '../components/VerticalTimeline'


function Resume() {
    return (
        <Layout pageTitle="Work experience & Education" pageSubTitle="My previous jobs, awards and my qualifications. You can also download my resume at this link"> 
            <VerticalTimeline />  
        </Layout>         
    )
}
 
export default Resume