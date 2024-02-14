import React from 'react';
import LOLpic from '../LoL-sc.PNG'
import historyPic from '../history-sc.PNG'

const Projects = () => {
  return (
    <section>
    <h2 style={{ fontSize: "200%", fontWeight: '800', marginLeft: '3%' }}>Projects</h2>

    <div style={{ marginBottom: '20px' }}>
      <h2 style={{fontWeight: '700'}}>League Of Lore</h2>
      <p style={{fontWeight: '600'}}>
        League of Lore is a forum for League Of Legends players to discuss character Lore. Users make an account and discuss related topics with other users through comment sections and a public forum to post on.
        This is my most recent project showcasing my capabilities.
      </p>
      <ul style={{listStyle: 'disc', marginLeft: '5%'}}>
        <li>Used JavaScript + React for frontend functionality with CSS design features and variable state management, following REST conventions.</li>
        <li>Implemented Rails ActiveRecord methods for backend functionality and encrypting user information, also exception handling for errors.</li>
        <li>Built Action Mailer functionality to allow the app to send emails to users upon account creation.</li>
        <li>Managed project data using PostgreSQL, ensuring secure and organized storage.</li>
      </ul>
      <div>
       <b> GitHub:</b> <a href="https://github.com/patrickmason73/League-of-lore" target="_blank" rel="noopener noreferrer">League Of Lore - GitHub</a> | <b>Demo:</b> <a href="https://capstone-project-ud8d.onrender.com/" target="_blank" rel="noopener noreferrer">League Of Lore - Demo</a>
      </div>
      <img src={LOLpic} alt='League of Lore' style={{ width: '50%', borderStyle: 'solid' }} />
    </div>

    <div>
      <h2 style={{fontWeight: '700'}}>Historical Database and Forum</h2>
      <p style={{fontWeight: '600'}}>
        Historical Database and Forum is a place for people to post lesser-known historical figures or facts for users to discuss.
        This project was great experience in gaining hands-on experience in implementing and managing backend databases, specifically focusing on PostgreSQL.
        I also enhanced my skills in securing sensitive information by implementing encryption and data protection measures.
      </p>
      <ul style={{listStyle: 'disc', marginLeft: '5%'}}>
        <li>Utilized Javascript with React to track variable states as well as managing routes and fetch requests.</li>
        <li>Used Ruby on Rails to build a database to store user posts/accounts/comments with appropriate relationships.</li>
        <li>Acquired knowledge in maintaining state through sessions, improving user experience and ensuring data persistence.</li>
      </ul>
      <div>
      <b> GitHub:</b> <a href="https://github.com/patrickmason73/historical-database-and-forum" target="_blank" rel="noopener noreferrer">Historical Database and Forum - GitHub</a> | <b>Demo:</b> <a href="https://history-app.onrender.com/" target="_blank" rel="noopener noreferrer">Historical Database and Forum - Demo</a>
      </div>
      <img src={historyPic} alt='history project' style={{width: '50%', borderStyle: 'solid'}}/>
    </div>
  </section>
);
}

export default Projects;