import { Link } from 'react-scroll'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        
        <li>
          <Link to="experience" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact 
          </Link>
        </li>


      </ul>

    </div>
  )
}

export default Navbar
