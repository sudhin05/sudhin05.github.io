import React, { useState }  from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projects.css';

import rag from '../assets/projects/rag.png';
import enterprise from '../assets/projects/enterprise.png';
import rppg from '../assets/projects/rppg.jpg';
// import murmur from '../assets/projects/murmur.png';
// import mwd from '../assets/projects/mwd.png';
import georef from '../assets/projects/georeferencing.png';
// import scania from '../assets/projects/scania.png';
import yoga from '../assets/projects/yoga.png';
import audio from '../assets/projects/audio.png';


const Projects = () => {
    const projectsData = [
        {
        title: "Multi-Scale Attention & Cross Spatial Learning based rPPG",
        description: " A novel multi-scale attention approach that fuses spatial and temporal information for remote photoplethysmography (rPPG) signal extraction from facial videos achieving a 12.22% improvement in SNR and a 26.74% reduction in MSE compared to state-of-the art methods  with standoff distances of 1.5-3 metres",
        image: rppg,
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/sudhin05/MSACL-rppg"
        },
        {
        title: "Direct Georeferencing on Small Unmanned Aerial Systems",
        description: "A direct measurement of the position and orientation of an airborne mapping sensor Sony IMX477 that georeferences each pixel or range to the Earth without the need for ground information collected in the field. Achieved using data collected from GNSS integrated with measurements from inertial sensors that directly attached to the mapping sensor.",
        image: georef,
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/sudhin05/Georeferencing"
        },
        {
        title: "Yoga Pose Estimation by Angle-Based Feature Extraction",
        description: "This project addresses the challenges of maintaining proper yoga postures through a mechanism for detecting correct yoga poses and providing real-time feedback through the application of computer vision and machine learning (ML) techniques.",
        image: yoga, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/sudhin05/Yoga-pose"
        },
        {
        title: "Multi-personality RAG Application",
        description: "A multipersonality RAG application that leverages GrocLake to integrate efficient data retrieval, model management, and vector embeddings. It uses separate rule sets, databases, and fine-tuned models to ensure context-aware, dynamic responses for diverse user queries.",
        image: rag, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/sudhin05/GroclakeRAG"
        },
        {
        title: "Enterprise HR Assistant Application",
        description: "Enterprise Chatbot Functionality with fine-tuned LLM-Powered Interaction. Document OCR, Bad Language Filtering and Multi-language support",
        image: enterprise, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/sudhin05/PegasusMLM"
        },
        {
        title: "Blind Source Separation",
        description: "A multi-context blind source separation (BSS) task, where an agent needs to infer hidden sources from their context-dependent mixtures. The agent is expected to invert this mixing process for all contexts",
        image: audio, 
        buttonLabel: "GitHub",
        buttonLink: "https://github.com/sudhin05/Blind-source-separation"
        },
        // {
        // title: "Heart Murmur Classification",
        // description: "Predicting a heart to be normal or abnormal based on the murmur signal classifications using simple ML algorithms",
        // image: murmur, 
        // buttonLabel: "GitHub",
        // buttonLink: "https://github.com/subhamshome/murmur-classification"
        // },
        // {
        // title: "Scania Trucks - Air Pressure Failure Prediction",
        // description: "A classical machine learning algorithm based binary classification on the famous Scania APS dataset",
        // image: scania, 
        // buttonLabel: "GitHub",
        // buttonLink: "https://github.com/subhamshome/scania-aps-fail-pred-ml"
        // },
        // {
        // title: "Multiclass Weather Classification",
        // description: "Comparative analysis of ML and DL algorithms on the popular Multi-class Weather Dataset (MWD) for multi-class weather classification",
        // image: mwd, 
        // buttonLabel: "GitHub",
        // buttonLink: "https://github.com/subhamshome/multiclass-classification-weather-mwd"
        // },        
    ];
      
    const [visibleProjects, setVisibleProjects] = useState(3);

    // const showMoreProjects = () => {
    //     setVisibleProjects(visibleProjects + 3);
    // };

    const showLessProjects = () => {
        setVisibleProjects(3);
    };

    const showAllProjects = () => {
        setVisibleProjects(projectsData.length);
      };


    return (
        <div>
          <div className='project-cards'>
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                buttonLabel={project.buttonLabel}
                buttonLink={project.buttonLink}
              />
            ))}
          </div>
          <div className='view-buttons'>
            {visibleProjects < projectsData.length ? (
              <button onClick={showAllProjects} className="view-more-button">
                Show All {projectsData.length} projects
              </button>
            ) : (
              <button onClick={showLessProjects} className="view-more-button">
                Show Less
              </button>
            )}
          </div>
        </div>
      );
}

export default Projects;