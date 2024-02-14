import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{marginLeft: 'auto', marginRight: 'auto'}}>
      <nav >
        <ul>
          <li><Link to="/"><button>Home</button></Link></li>
          <li><Link to="/experience"><button>Experience</button></Link></li>
          <li><Link to="/skills"><button>Skills</button></Link></li>
          <li><Link to="/projects"><button>Projects</button></Link></li>
          <li><Link to="/contact"><button>Contact</button></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;