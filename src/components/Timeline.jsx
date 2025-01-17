import React from 'react';
import { Chrono } from 'react-chrono';
import dtu from '../assets/timeline/DTU_logo.png';
import uas from '../assets/timeline/uas_logo.png';
import icuas from '../assets/timeline/icuas_logo.png';
import darpa from '../assets/timeline/DARPA.png';
import gdsc from '../assets/timeline/gdsc_logo.png';
import '../styles/timeline.css';


// const amity = 'https://drive.google.com/uc?export=view&id=1z8KwaXKcrUNNpGfeSXeDK1GQEFS3HSfU';
// const ipcv = 'https://drive.google.com/uc?export=view&id=1OAJYVBlH_Ti1R_G641cI_buVGwrqZBQn';
// const isi = 'https://drive.google.com/uc?export=view&id=1x6KFFJJ9SEjzF3zJ6n3S_hzUTyF-aXLc';
// const ppcu = 'https://drive.google.com/uc?export=view&id=1sStsE92BC9aeyVCiDgLf0jyKPsWu4vGP';
// const tcs = 'https://drive.google.com/uc?export=view&id=1avYjRxyqQG9QMAv00RSMX0tOx0XLpB_r';
// const uam = 'https://drive.google.com/uc?export=view&id=1QCspz7ZCOfhTqn7jyuAOaU3ZKMnXuvzx';
// const ubx = 'https://drive.google.com/uc?export=view&id=1JJUt8H1itbVm_v_box83CzmzNYBY6pg7';

const entries = [
  {
    cardTitle: "Appointed Head of Machine Learning for GDSC-DTU",
    cardSubtitle: "Began my third semester as the Machine Learning Head for Google Developer Students Club - Delhi Technological University (GDSC-DTU)",
    cardDetailedText: "Mentored a team of 40 members, guiding them in the research and development of state-of-the-art models in computer vision and genAI. Led educational initiatives, organized 5+ workshops and open-house sessions, teaching up to 100 students on advanced deep learning methods",
    date: "October 2024"
  },
  {
    cardTitle: "Historic achievement at the DARPA Triage Challenge",
    cardSubtitle: "Our Team proudly Secured 2nd place in the World among self-funded teams, winning a cash prize of $60,000 and placing in the Top Five overall at the DARPA Triage Challenge System Competition Year 1, held in Georgia, USA.",
    cardDetailedText: "Developed and deployed a ROS2-based Autonomous Pipeline for Triage in Mass Casualty Scenarios simulated within CARLA, leveraging multimodal data streams (RGB, IR, Radar) to provide comprehensive casualty assessments for casualties. Integrated and optimized models for Pose estimation, Heart rate, Respiratory rate, & casualty Alertness. Developed A high-throughput, cloud-ready system for parallel inference, handling up to 30 simultaneous casualty assessments",
    date: "September 2024"
  },
  {
    cardTitle: "Excellence at ICUAS-2024",
    cardSubtitle: "Achieved Second position in the indoor simulation round and the third overall position in the International Conference of Unmanned Aerial Systems (ICUAS) 2024 Competition",
    cardDetailedText: "Our team developed an autonomous quadcopter for fruit counting using an RGB camera and LiDAR sensor, utilizing ROS for path planning, SLAM, and fruit detection.",
    date: "June 2024"
  },
  {
    cardTitle: "Conquering the skies with Team UAS-DTU",
    cardSubtitle: "Joined the esteemed student-led Aerial Robotics Team UAS-DTU",
    cardDetailedText: " Delved into the practical applications of AI in aerial robotics and autonomous systems. Gained hands-on experience integrating AI-driven solutions into real-time systems, particularly focusing on multimodal data fusion for perception tasks. Pioneered semantic segmentation, object detection, and decision-making algorithms under resource-constrained environments. Optimized AI models for edge devices like Jetson Nano and Intel Nuc",
    date: "Feb 2024"
  },
  {
    cardTitle: "Undergraduate Journey Begins at Delhi Technological University",
    cardSubtitle: "Commenced my Undergraduate (B.Tech) studies in Computer Science & Engineering at Delhi Technological University, New Delhi",
    cardDetailedText: "Courses Taken: Data Structures, Algorithms, Machine Learning, Discrete Structures, Object Oriented Programming, Operating Systems, Database Management Systems, Computer Architecture, Theory of Computation, Computer Networks ",
    date: "August 2023"
  }
];


const Timeline = () => {
  return (
    <Chrono items={entries} 
    mode="VERTICAL_ALTERNATING" 
    slideShow={true} 
    hideControls={true} 
    slideItemDuration={4500}
    slideShowType="slide_from_sides" 
    // disableClickOnCircle={true} 
    allowDynamicUpdate={true}
    activeItemIndex={null}
    titleDateFormat='MMM YYYY'
    scrollable
    // timelinePointShape={null}
    >
      <div className="chrono-icons">
        <img src={gdsc} alt='GDSC' />
        <img src={darpa} alt='DARPA' />
        <img src={icuas} alt='ICUAS' />
        <img src={uas} alt='UAS' />
        <img src={dtu} alt='DTU' />
      </div>
    </Chrono>
  );
};

export default Timeline;
