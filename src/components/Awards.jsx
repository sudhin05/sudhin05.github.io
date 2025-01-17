import React from 'react';
import '../styles/awards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faAward, faTrophy, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Awards = () => {
   return(
      <div className='awards-div-main'>
        <div className='awards-text'>
            <div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faTrophy} /></div>
               <div>
                  <span className='award-text-header'>2nd Position - DARPA (Defense Advanced Research Projects Agency) Triage Challenge Phase 1 - Perry, Georgia </span>
                  <br />
                  <span className='award-date'>September 2024</span>
                  <br />
                  We were the sole team from the APAC region, representing Delhi Technological University (Formerly DCE) on the same global stage alongside prestigious institutions & organizations like Skydio, Raytheon, Batelle, Carnegie Mellon University, University of Pennsylvania and University of Maryland
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faAward} /></div>
               <div>
                  <span className='award-text-header'>Second Position - International Conference of Unmanned Aircraft Systems - Chania, Greece. </span>
                  <br />
                  <span className='award-date'>June 2024</span>
                  <br />
                  The competition brought together the 36 final qualified teams from 19 countries, showcasing the global interest in advancing innovative solutions in the field of Aerial Robotics.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faUserGraduate} /></div>
               <div>
                  <span className='award-text-header'>JEE (Joint Entrance Examination) Mains 2023</span>
                  <br />
                  <span className='award-date'>May 2023</span>
                  <br />
                  Achieved an all-India rank of 8,836 with a 99.27 percentile in JEE Mains 2023 among a total of 1.1M students who appeared for the exam.
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faMedal} /></div>
               <div>
                  <span className='award-text-header'>Hanoi Open Mathematics Competition National Qualifiers</span>
                  <br />
                  <span className='award-date'>Jun 2021</span>
                  <br />
                  Achiever an All-India Rank of 122 in the esteemed HOMC National qualifiers 2020-21, with over 10,000 contestants participating from 50 cities across the country
               </div>
               </div>
               <div className='awards-item'>
               <div style={{width: '40px'}}><FontAwesomeIcon icon={faUserGraduate} /></div>
               <div>
                  <span className='award-text-header'>School Topper - Central Board of Secondary Education (CBSE) Class 10th Board Examinations </span>
                  <br />
                  <span className='award-date'>May 2021</span>
                  <br />
                  Secured 99.6% in CBSE Class 10 Board Examinations 2021, ranking among the top students at the national level.
               </div>
               </div>
            </div>
        </div>
     </div>
   )
};
   
   export default Awards;