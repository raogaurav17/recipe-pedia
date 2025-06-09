import { Instagram, Github, Linkedin} from 'lucide-react';


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Recipe-Pedia</h3>
          <p>Your go-to place to discover and explore thousands of delicious recipes</p>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-icons">
          
            <a href="https://www.instagram.com/gaurav_rao17/" aria-label="Instagram" target='_blank'  rel='noreferrer'>
              <Instagram className="icon" />
            </a>
            <a href="https://github.com/raogaurav17/" aria-label="Github" target='_blank' rel='noreferrer'>
              <Github className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/ydv17gaurav/" aria-label="Linkedin" target='_blank' rel='noreferrer'>
              <Linkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 Recipe-Pedia | All rights reserved
      </div>
    </footer>
  );
};



