import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">The Hidden Chapter LLC</h4>
            <h4 className="vertical-timeline-element-subtitle">Elk Grove, CA (Remote)</h4>
            <p>
              Co-founded a self-funded indie studio and took a mobile game from concept to launch on iOS and Android, owning both the Unity/C# architecture and the business side end to end.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Intuit Inc. / Mailchimp</h4>
            <h4 className="vertical-timeline-element-subtitle">Mountain View, CA (Hybrid)</h4>
            <p>
              Owned a Model Observability system and backend microservices supporting generative AI use cases, serving millions of daily requests while mentoring engineers and leading production incident response.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">KelaHealth Inc.</h4>
            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA (Remote)</h4>
            <p>
              Built a full-stack healthcare application integrating with the Epic EHR system, architecting serverless and containerized AWS infrastructure to support real-time predictive models across hospital systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Blue Sages Inc. / Verb Surgical Inc.</h4>
            <h4 className="vertical-timeline-element-subtitle">Santa Clara, CA</h4>
            <p>
              Built cloud data infrastructure and reverse-engineered an undocumented SDK for a robotic surgical system, directly enabling a proof of concept that supported J&J's acquisition of the company.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Robin Care Inc.</h4>
            <h4 className="vertical-timeline-element-subtitle">Palo Alto, CA</h4>
            <p>
              Built client and admin portals in React for a chat application connecting cancer patients and nurses, including a dynamic component generator that let non-engineers modify the UI.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">California State University Monterey Bay</h4>
            <h4 className="vertical-timeline-element-subtitle">Seaside, CA</h4>
            <p>
              Researched 3D pointing, inside-out VR tracking, and low-cost prosthetic sensing, building smartwatch-based 3D pointing software for mobile VR.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer in Test (Internship)</h3>
            <h4 className="vertical-timeline-element-subtitle">Yottamark inc.</h4>
            <h4 className="vertical-timeline-element-subtitle">Redwood City, CA</h4>
            <p>
              Developed models and frameworks using Appium and Java to create and automate tests for mobile applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;