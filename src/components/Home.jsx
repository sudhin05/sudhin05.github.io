import React from 'react';
import '../styles/home.css';
import AcademicBar from './AcademicBar';
import introImage from '../assets/introImage.png';
import Skills from './Skills';
import Projects from './Projects';
import Timeline from "./Timeline";
import Awards from './Awards';
import ResearchCard from './ResearchCard';
import Contact from './Contact';

const Home = () => {

        const heroText = [
                <div>
                        B.Tech. Computer Science & Engineering &nbsp;|&nbsp; Delhi Technologcial University &nbsp;|&nbsp; Team UAS-DTU
                        <div className='academic-hero'>
                                <AcademicBar className='academic-hero' />
                        </div>                        
                </div>
        ];

        

        const introText = [
                <p style={{marginLeft: '10%', marginRight: 0}}>
                        Welcome to my Personal Page! I am a Computer Science & Engineering <b>Undergraduate</b> student at the <b>Delhi Technological University, New Delhi, India</b>. I am currently researching in the field of Primary Medical Triaging through Autonomous Robotic Platforms. 
                        <br /><br />
                        Over the past year, I've been an actively working as a Software Engineer for Team UAS-DTU, a student led tech team specialising in Aerial Robotics. As a part of the team, I have primarily worked on Image Processing and Computer Vision using cutting-edge computer vision models like YOLO, ViTPose, and CLIP.
                        I've developed End-to-End deployable pipelines and optimized model performance to improve detection accuracy & system efficiency in diverse resource-constrained environments.
                        <br /><br />
                        I am also a part of the Google Developer Student Clubs (GDSC) initiative, where I lead projects focused on leveraging Artificial Intelligence for community impact. Through this program, I have connected with juniors & peers, conducted workshops on machine learning frameworks, and collaborated on open-source projects with a group of young AI enthusiasts
                        <br /><br />
                        Recently, I participated in the DARPA(Defense Advanced Research Projects Agency) Triage Challenge, competing against the likes of Skydio, Raytheon, Batelle, Carnegie Mellon University, University of Pennsylvania & University of Maryland, where we achieved 2nd place amongst self-funded teams and 5th overall in the systems category of the competition, amassing a prize money of 60,000 USD. The challenge aims to drive breakthrough innovations in the identification of “signatures” of injury to help medical responders perform scalable, timely, and accurate triage. 
                        <br /><br />
                        Besides pursuing academics and research, I find joy in reading, spending time with my family and listening to Indian Classical Music. I'm also a flautist and I do like participate in orchestras and community events from time to time.
                </p>
        ];

 return (
    <div className='main-div-home'>
        <div id='home'>
                <div className='hero'>
                        {/* <HeroImage /> */}
                        <h1>Sudhindra Pai</h1>
                        {heroText}
                </div>
        </div>

        <div id='about' className='sections-home'/>                            
        <div className='about'>
                <h1 className='home-headers'>Introduction</h1>
                <div className='intro-grid'>
                        <div className='intro-img-container'>
                                <img src={introImage} alt='self-intro' className='intro-image'/>
                        </div>
                        <div className='intro-text-container'>
                                {introText}  
                        </div>
                </div>
                <h3>Research Interests</h3>
                <div className='research-card-section'>
                <ResearchCard title="Image Reconstruction" />
                <ResearchCard title="Remote Biosensing" />
                <ResearchCard title="Perception" />
                <ResearchCard title="Geo-localization" />
                <ResearchCard title="Applied Mathematics" />
                <ResearchCard title="Biotechnology" />
                <ResearchCard title="Deep Learning" />
                <ResearchCard title="Computer Vision" />
                </div>
        </div>

        <div id='skills' className='sections-home'/>                            
        <div className='skills-main'>
                <h1 className='home-headers'>Technical Expertise</h1>
                <Skills />
        </div>

        <div id='timeline' className='sections-home'/>                            
        <div className='timeline-main'>
                
        <h1 className='home-headers'>My journey so far</h1>
        <Timeline
                mode="VERTICAL_ALTERNATING"
                theme={{
                primaryColor: "#000000",
                secondaryColor: "#ffffff",
                }}
        />
        </div>

        <div id='projects' className='sections-home'/>                            
        <div style={{maxWidth: '100vw'}}>
                <h1 className='home-headers'>Research Projects</h1>
                <div className='projects-main'>
                        <Projects />
                </div>
                
                
        </div>

        <div id='awards' className='sections-home'/>                            
        <div className='awards-main'>
                <h1 className='home-headers'>Honors and Awards</h1>
                <Awards />
        </div>

        <div id='contact' className='sections-home'/>                            
        <div className='contact-main'>
                <h1 className='home-headers'>Contact me</h1>
                <Contact />
        </div>
    </div>
 ) 
};

export default Home;