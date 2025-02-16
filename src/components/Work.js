import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full bg-black text-gray-300"
      style={{ height: "auto", paddingTop: "85px", paddingBottom: "50px" }}
    >
      <div className="flex flex-col w-full h-full mt-10 justify-center place-items-center">
        <div className="pb-8 pl-4">
          <p
            className="text-3xl md:text-5xl font-bold inline border-b-4 bright-text"
            style={{ borderBottomColor: "#1F2833" }}
          >
            Work-Experience
          </p>
        </div>
        <div className="w-full h-full justify-center place-items-center mt-10" style={{position: "relative", zIndex: 0}}>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1F2833", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #1F2833",
            }}
            date="May 2024 - Present"
            iconStyle={{ background: "#45A29E", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h1 className="vertical-timeline-element-title font-bold text-xl">
            Software Engineer (Android)
            </h1>
            <h4 className="vertical-timeline-element-subtitle">
              <span style={{ display: "flex", alignItems: "center" }}>
                <HiOutlineBuildingOffice2
                  style={{ height: "20px", marginRight: "5px" }}
                />
                <span>
                  OKX, San Jose, California
                </span>
              </span>
            </h4>
            <p>
              <ul style={{ listStyleType: "circle", marginLeft: "1rem" }}>
                <li>
                Boosted user engagement and conversions by developing impactful features, 
                achieving a 50.7% click-through-rate, and 15.1%
                transaction conversion, while enhancing content discoverability, 
                leading to ~45% user interaction and longer session durations.
                </li>
                <li>
                Optimized app architecture, performance, and testing, 
                by migrating legacy code to MVVM design pattern for better maintainability
                & scalability, reducing API response times by ~33%, 
                and automating tests to cut manual effort by 30% weekly.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1F2833", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #1F2833",
            }}
            date="Aug 2021 - Jun 2022"
            iconStyle={{ background: "#45A29E", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h1 className="vertical-timeline-element-title font-bold text-xl">
              Graduate Engineer Trainee (Software Engineer)
            </h1>
            <h4 className="vertical-timeline-element-subtitle">
              <span style={{ display: "flex", alignItems: "center" }}>
                <HiOutlineBuildingOffice2
                  style={{ height: "20px", marginRight: "5px" }}
                />
                <span>Varroc Engineering Ltd, Pune, India</span>
              </span>
            </h4>
            <p>
              <ul style={{ listStyleType: "circle", marginLeft: "1rem" }}>
                <li>
                  Implemented automated document access and review processes,
                  resulting in a 36% reduction in product development time and
                  saving 22.37 lakhs INR (~28,000 USD) in costs.
                </li>
                <li>
                  Optimized Quality Management System through a
                  communication-efficient website, saving 15-20 hours per team
                  and developed backend services using JavaScript, Python, and
                  Django for improved data fetching, and user management
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1F2833", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #1F2833",
            }}
            date="Feb 2020 - May 2020"
            iconStyle={{ background: "#45A29E", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h1 className="vertical-timeline-element-title font-bold text-xl">
              Mobile Application Developer Intern
            </h1>
            <h4 className="vertical-timeline-element-subtitle">
              <span style={{ display: "flex", alignItems: "center" }}>
                <HiOutlineBuildingOffice2
                  style={{ height: "20px", marginRight: "5px" }}
                />
                <span>
                  Tata Communications Transformation Services, Pune, India
                </span>
              </span>
            </h4>
            <p>
              <ul style={{ listStyleType: "circle", marginLeft: "1rem" }}>
                <li>
                  Spearheaded a full-stack application with React-native,
                  JavaScript, CSS, Spring Boot, and Rest API to streamline cable
                  wire and junction box maintenance, reducing overhaul time by
                  40%.
                </li>
                <li>
                  Developed an efficient image capture and location retrieval
                  algorithm whilst leading a team of 3 to build a secure
                  PostgreSQL and Spring Boot backend. Implemented OTP
                  authentication for seamless server connectivity and enhanced
                  user experience.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1F2833", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #1F2833",
            }}
            date="Sep 2019 - Dec 2019"
            iconStyle={{ background: "#45A29E", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <h1 className="vertical-timeline-element-title font-bold text-xl">
              Mobile & Web Application Developer Intern
            </h1>
            <h4 className="vertical-timeline-element-subtitle">
              <span style={{ display: "flex", alignItems: "center" }}>
                <HiOutlineBuildingOffice2
                  style={{ height: "20px", marginRight: "5px" }}
                />
                <span>Anubis technologies Pvt. Ltd., Pune, India</span>
              </span>
            </h4>
            <p>
              <ul style={{ listStyleType: "circle", marginLeft: "1rem" }}>
                <li>
                  Devised an android and web application with a team of 4, in
                  Android-Java, XML, JavaScript, HTML5 & CSS for students to
                  upload images or documents and get printouts at located print
                  shops to mitigate hassle of waiting in long queues.
                </li>
                <li>
                  Created a secure Google Firebase database for efficient data
                  storage and management, complemented by a PHP algorithm
                  automating the printing process by converting images and
                  documents into print-ready formats.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Work;
