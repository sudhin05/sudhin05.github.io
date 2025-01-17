import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faKaggle,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/academicbar.css';

const AcademicBar = () => {
  return (
    <div className="academic-bar">
      <a href="mailto:sudhindrapai11@gmail.com" target="_blank" rel="noopener noreferrer" className='email'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://linkedin.com/in/sudhin05" target="_blank" rel="noopener noreferrer" className='linkedin'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/sudhin05" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://kaggle.com/sudhin05" target="_blank" rel="noopener noreferrer" className='kaggle'>
        <FontAwesomeIcon icon={faKaggle} />
      </a>
    </div>
  );
};

export default AcademicBar;
