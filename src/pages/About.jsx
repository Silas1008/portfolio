import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug-Sep 2023"
          iconStyle={{ background: "#000", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
           UX designer at Sage
          </h3>
          <p>Product design, packaging and website creation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sep-Oct 2023"
          iconStyle={{ background: "#000", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Ux Designer at CryptoBuy
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Crypto currency website creation
          </h4>

          <p>React and Coingecko</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug-oct 2023"
          iconStyle={{ background: "#000", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
           UX Designer at Mini projects
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Created 4 different apps
          </h4>
          <p>Html, Css and Javascript</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug-current 2023"
          iconStyle={{ background: "#000", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Ux Designer at Websites
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Creating functional websites
          </h4>
          <p>
          Using Figma and Framer
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;