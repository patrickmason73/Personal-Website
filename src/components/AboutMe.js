import React from 'react';
import coyote from '../20110620-coyote-artwork-brandm_10963754.avif'
import alpine from '../alpinepharmacy_logo.jpg'
import rainbowTree from '../RainbowTreecare-Logo.webp'
import flatiron from '../FS_wiki.png'

const AboutMe = () => {
  return (
    <section style={{margin: '20px 0'}}>
      <h2 style={{fontSize: "200%", fontWeight: '800', marginLeft: '3%'}}>Experience</h2>

      <div style={{ display: 'flex', alignItems: 'center' }} className="job">
    <div style={{ marginBottom: '20px' }}>
      <h3>Flatiron</h3>
      <p>Denver, CO</p>
      <p style={{ fontStyle: 'italic' }}>Student</p>
      <p>Dec 2023 - Jan 2024</p>
      <ul>
        <li>Gained hands-on experience in JavaScript, React, Ruby on Rails and HTML/CSS as a full stack developer</li>
        <li>Trained on SQL and PostgreSQL databases</li>
        <li>Followed Agile methodology, collaborating on Github for projects</li>
        <li>Designed and built responsive web applications, using Node.js and implementing Active Record backend methods</li>
      </ul>
    </div>
    <img src={flatiron} alt="flatiron Logo" style={{ width: '20%', height: 'auto', marginLeft: '15%', borderRadius: '15px', borderStyle: 'solid' }} />
  </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ marginBottom: '20px' }} className='job'>
      <h3>Coyote Logistics LLC</h3>
      <p>Denver, CO</p>
      <p style={{ fontStyle: 'italic' }}>Account Manager - Carrier Sales</p>
      <p>June 2021 - Jan 2023</p>
      <ul>
        <li>Grew my book of business and formed relationships with new customers almost daily, averaging 50 calls per day</li>
        <li>Coordinated with shippers and receivers to ensure accurate and prompt deliveries from my drivers</li>
        <li>Conducted daily negotiations with customers regarding rates and earned commission through sales</li>
        <li>Consistently improved personal sales numbers month by month</li>
      </ul>
    </div>
    <img src={coyote} alt="Coyote Logistics Logo" style={{ width: '20%', height: 'auto', marginLeft: '15%', borderRadius: '15px', borderStyle: 'solid' }} />
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }} className="job">
    <div style={{ marginBottom: '20px' }}>
      <h3>Alpine Pharmacy</h3>
      <p>Lakewood, CO</p>
      <p style={{ fontStyle: 'italic' }}>Pharmacy Technician</p>
      <p>Jan 2023 - August 2023</p>
      <ul>
        <li>Followed all federal and state pharmacy protocols to provide medication deliveries to local retirement communities</li>
        <li>Gained extensive knowledge of pharmaceutical business practices and medicine expertise</li>
      </ul>
    </div>
    <img src={alpine} alt="Alpine Pharmacy Logo" style={{ width: '20%', height: 'auto', marginLeft: '15%', borderRadius: '15px', borderStyle: 'solid' }} />
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }} className="job">
    <div style={{ marginBottom: '20px' }}>
      <h3>Rainbow Treecare</h3>
      <p>Minnetonka, MN</p>
      <p style={{ fontStyle: 'italic' }}>Rainbow Treecare · Internship</p>
      <p>May 2020 - Aug 2020</p>
      <ul>
        <li>Marketed and promoted environmental solutions to preserve endangered trees within the community</li>
        <li>Performed a variety of tasks including sales, customer service, account management, and business development</li>
        <li>Successfully generated new business opportunities through proactive outreach and networking</li>
        <li>Completed nine college credits during the summer term in addition to internship responsibilities</li>
      </ul>
    </div>
    <img src={rainbowTree} alt="Rainbow Treecare Logo" style={{ width: '20%', height: 'auto', marginLeft: '15%', borderRadius: '15px', borderStyle: 'solid' }} />
  </div>
</section>
);
}

export default AboutMe;