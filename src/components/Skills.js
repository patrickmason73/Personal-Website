import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3, FaDatabase, FaLaptop } from 'react-icons/fa';
import { SiRuby } from 'react-icons/si';
const Skills = () => {
  return (
    <section>
      <h2 style={{fontSize: "200%", fontWeight: '800', marginLeft: '3%'}}>Skills</h2>
      <ul style={{marginLeft: '5%', fontSize: '140%', fontWeight: '600', padding: '5px'}}>
      <li><FaReact /> React</li>
        <li><FaJs /> JavaScript</li>
        <li><SiRuby /> Ruby on Rails</li>
        <li><FaNodeJs /> Node.js</li>
        <li><FaHtml5 /> HTML</li>
        <li><FaCss3 /> CSS</li>
        <li><FaDatabase /> Postgres</li>
        <li><FaDatabase /> SQL</li>
        <li><FaLaptop /> Marketing/Communication</li>
      </ul>
      <p style={{ marginLeft: '5%', fontSize: '110%', fontStyle: 'italic' }}>
        Experienced in building responsive web applications using React and JavaScript.
        Completed advanced courses in HTML and CSS. Competent Ruby skills and actively improving them through personal projects.
      </p>
    </section>
  );
}

export default Skills;