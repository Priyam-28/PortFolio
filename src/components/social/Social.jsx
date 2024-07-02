import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './social.scss';

const Social = () => {
  



  return (
    <div className="social-media-tray">
      <a href="https://twitter.com/UnknownRider_28" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/d-s-priyam-168a56288/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
      </a>
      
      <a href="https://github.com/Priyam-28" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
       
      </a>
    </div>
  );
};

export default Social;
