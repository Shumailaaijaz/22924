import Footer from "../components/Footer"
import Header from "../components/Header"
import Wrapper from "../components/shared/wrapper"

import ProfilerPic from "../components/public/profile.png"
import Image from "next/image"
import { Profiler } from "react"
const page = () => {
  return (
  <body>
  <div className="main-container">
      <Wrapper>
      <Header/>
      <div className="header-text">
        <h1>Welcome to My Resume</h1>
        <p>I am Shumaila Aijaz, a passionate and dedicated IT professional with a strong background in web development and problem-solving abilities.</p>
      </div>
      
      
        <div className="resume-container">

        <div className="left-section">
        <Image src={ProfilerPic} alt="Profile Pic" className="profile-picture" />
         <section id="objective">
            <h3>Career Objective</h3>
            <p>Motivated IT professional with 6th months of experience in Typescrip. Seeking to leverage expertise in web development and strong problem-solving abilities to contribute to my clint's innovative solutions and support business growth.
            </p>
         </section>

         <section id="Certification">
            <h3 >Certification</h3>
            <p><b>Artificial Intellligence, web 3.0 & Metaverse: From Governer House Karachi(onging)</b></p>
         </section>
        </div>

      <div className="right-section">
            <h1>My Resume</h1>
      
            <section id="personal-info">
                <h3>Personal Information</h3>
                <p><b>Name:</b>Shumaila Aijaz</p>
                <p><b>Email:</b> <a href="mailto:shumaila@hotmail.com">shumaila@hotmail.com</a></p>
                <p><b>LinkedIn:</b> <a href="http://www.linkedin.com/in/shumaila-aijaz-916b412b3" target="_blank">www.LinkedIn.com</a></p>

                </section>
         
                <section id="education">
                <h3>Education</h3>
                <p><b>Masters:</b> Masters in Social Work From University of Karachi</p>
                <p><b>Bachelors:</b> From Govt. Karachi collage for womens</p>
                <p><b>Intermediate:</b>From Govt.Karachi collage for womens</p>
                <p><b>Matriculation:</b>From Fazlur Rahman Govt. girls secondary  school Urdu Bazar Karachi </p>
                </section>

          
                <section id="skills">
                <h3>Skills</h3>
                <ul>
                    <li>Ms Office</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Typescript</li>
                    <li>javascript</li>
                </ul>
                </section>

           
                <section id="work-experience">
                        <h3>Work Experience</h3>
                        <h4>Governer House  (Karachi, Pakistan)</h4>
                        <p>February 2024 - Present</p>
                        <ul>
                            <li>Worked on various projects related to web development</li>
                            <li>Designed and implemented responsive web applications</li>
                            <li>Collaborated with team members to address complex issues and bugs</li>
                            <li> Seeeking an opportunity as a fresh candidate to start my professional career.</li>
                        </ul>
                </section>
        </div>
     
  </div>
  <Footer/>
  </Wrapper>
  </div>
  </body>
  
  )
}
 export default page
