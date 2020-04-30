import React from 'react'
//import LayoutResume from '../components/LayoutResume'
import VerticalTimeline from '../components/VerticalTimeline'
import dynamic from 'next/dynamic'
const LayoutResume = dynamic(() => import('../components/LayoutResume'), {ssr:false})


function Resume() {
    return (
        <LayoutResume pageTitle="Work experience & Education" pageSubTitle="My previous jobs, awards and my qualifications. You can also download my resume at this" link="https://drive.google.com/file/d/1OEZkOvWoelFDr2QzSR4zx9apGvtYi7c3/view?usp=sharing"> 
            <VerticalTimeline />  
        </LayoutResume>         
    )
}
 
export default Resume