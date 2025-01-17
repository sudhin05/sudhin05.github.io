import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

   const address = [<p>Delhi Technological University, Delhi</p>];
   
   const email = [<a href="mailto:sudhindrapai11@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Mail</p>
   </a>];
   
   const blog = [<a href="https://medium.com/@sudhindrapai11" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>Medium</p>
   </a>];

   const linkedin = [<a href="https://linkedin.com/in/sudhin05" target="_blank" rel="noopener noreferrer" className="contact-links">
      <p>LinkedIn</p>
   </a>];

   return(
      <div className='contact-div-main'>
            <div className='contact-grid'>
               <div className='contact-text'>
                  <div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLocationDot} />{address}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faEnvelope} />{email}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faMedium} />{blog}
                     </div>
                     <div className='contact-item'>
                        <FontAwesomeIcon icon={faLinkedin} />{linkedin}
                     </div>
                  </div>
               </div>
               <div className='contact-grid-2'>
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.646706904387!2d77.11504612103533!3d28.749416870576415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1737062471015!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  className="map-contact" 
                  allowfullscreen="" 
                  loading="lazy" 
                  title="Google Maps DTU"
                  referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                  {/* <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13991.915240949473!2d77.10533915592028!3d28.750049609608897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1737061653048!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  className="map-contact"
                  allowfullscreen="" 
                  loading="lazy" 
                  title="Google Maps DTU"
                  referrerpolicy="no-referrer-when-downgrade">
                  </iframe> */}
               </div>
            </div>
     </div>
   )
};
   
export default Contact;