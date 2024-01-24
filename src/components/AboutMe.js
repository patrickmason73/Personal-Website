import React from 'react';
import laxImg from '../lax pic.jpg'
import nicePic from '../nice pic.jpg'
import UNLBis from '../unl business.png'

const AboutMe = () => {
  return (
    <section style={{margin: '20px 0'}}>
      <h2 style={{fontSize: "200%", fontWeight: '800', marginLeft: '3%'}}>About Me</h2>
      <div style={{width: '45%', float: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <p style={{ borderStyle: "solid", backgroundColor: 'black', color: "white", padding: "10px", textAlign: 'center', fontSize: '21px'}}>
       I'm from a town in Minnesota called Chanhassen. After graduating high school, I decided to get a degree in international business with a focus on marketing. I also obtained a minor in Japanese, and spent a semester at Senshu University in Tokyo. From there, I started my marketing career at Coyote Logistics LLC as a carrier sales associate for about 2 years. Working in this professional environment helped me gain an understanding of business ediquettes and procedures that couldn't be taught in the classroom. However, I soon learned that marketing was not a passion of mine, just something I was good at. This lead me to do some searching, and found out about the Flatiron School. I decided to jump in and tackle this program. I left my comfortable marketing career to focus on something I felt would benefit me greatly long term, and give me a sense of fullfilment that marketing wasn't providing me. I'm now ready to start fresh in my new career as a web developer, and I couldn't be more eager.  
      </p>
      <p style={{ borderStyle: "solid", backgroundColor: "black", color: "white", padding: "10px", textAlign: 'center', fontSize: '21px'}}>
       I grew up playing team sports. Hockey and Lacrosse will always be passions of mine. I'm a firm believer that kids and young adults gain many skills in cooperation through participating in team sports. My other hobbies include gaming, watching movies, and following the NBA. I enjoy thinking about the process that goes into making movies and video games, all the effort that goes in behind the scenes amazes me. 
      </p>
      <img src={nicePic} alt='nicePic' style={{borderStyle: 'solid', borderRadius: '100px'}} />
      </div>
      <div style={{width: '45%', float: 'right', background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={laxImg} alt='laxImg' style={{width: '100%', maxWidth: '400px', height: 'auto', borderStyle: 'groove', borderColor: 'black', borderRadius: '10px'}} />
      </div>
      <div style={{width: '45%', float: 'right', background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
        <img src={UNLBis} alt='UNLB' style={{width: '50%'}} />
      </div>
  
  </section>
  );
}

export default AboutMe;