import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import StarIcon from '@material-ui/icons/Star'
import css from '../src/css/components/VerticalTimeLine.module.scss'

function VerticalTimeLine() {
  const styles = css
  return (
    <VerticalTimeline className={styles.verticalTimelineRoot}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'linear-gradient(135deg, #6600aa 0%, #55025a 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          contentArrowStyle={{ borderRight: '7px solid  #55025a' }}
          date="2011 - present"
          dateClassName={ styles.dateFirstItem }
          iconStyle={{ background: 'linear-gradient(135deg, #6600aa 0%, #55025a 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2010 - 2011"
          iconStyle={{ background: 'linear-gradient(135deg, #6600aa 0%, #55025a 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2008 - 2010"
          iconStyle={{ background: 'linear-gradient(135deg, #6600aa 0%, #55025a 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="February 2008 - October 2008"
          iconStyle={{ background: 'linear-gradient(135deg, #6600aa 0%, #55025a 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Front-End Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">BriviaDez</h4>
          <p>
            Code with HTML, CSS, Javascript, MySql and PHP
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2017"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Startup RS - Scale Ups</h3>
          <h4 className="vertical-timeline-element-subtitle">Acceleration Program - SEBRAE</h4>
          <p>
            Scale Ups acceleration program
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2016"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Startup RS - Digital</h3>
          <h4 className="vertical-timeline-element-subtitle">Acceleration Program - SEBRAE</h4>
          <p>
            Startups acceleration program for digital startups
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2014"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Master of Business Administration (MBA)</h3>
          <h4 className="vertical-timeline-element-subtitle">MBA - Unilassale (Stopped)</h4>
          <p>
            MBA in Strategic Management and Innovation
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2012"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Project Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification - Feevale</h4>
          <p>
            Project management
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2008 - 2011"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Marketing Degree</h3>
          <h4 className="vertical-timeline-element-subtitle">Degree - Northern University of Paraná</h4>
          <p>
            Marketing, Management, Strategy, Digital Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2011"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Innovation Management</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification - Feevale</h4>
          <p>
            Innovation Management: Practice and Relevance.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2009"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Entrepreneurial Training Program</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification - Feevale</h4>
          <p>
            Entrepreneurship, people management, marketing and financial management.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2007 - 2008"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Tech Qualification Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification - BriviaDez</h4>
          <p>
            HTML, CSS, Javascript, PHP, MySql
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="2007 - 2008"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Tech Qualification Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification - Liberato Fundation</h4>
          <p>
            Software Development C# and JAVA
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          date="1997 - 1998"
          iconStyle={{ background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)', color: '#fff', boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">IT fundamentals</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            IPD-DOS 6.22, Windows 3'11, Word, Excel, PowerPoint
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)', color: '#fff' }}
          icon={<StarIcon />}
        />
  </VerticalTimeline>
  )
}

export default VerticalTimeLine