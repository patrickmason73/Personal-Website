import React from 'react';

const Contact = () => {
  return (
    <section>
      <h2 style={{ fontSize: "200%", fontWeight: '800', marginLeft: '3%' }}>Contact</h2>
      <div style={{marginLeft: '5%', background: 'none', fontWeight: '600', fontSize: '120%'}}>
      <p>You can reach me at: patrickmason73@gmail.com</p>
      <p>Phone Number: 612-805-3509</p>
      <p>LinkedIn: <a href='https://www.linkedin.com/in/patrick-mason7/'>My Profile</a></p>
      <p>Github: <a href='https://github.com/patrickmason73'>My Github Account</a></p>
      <p>Current Location: Chanhassen, MN</p>
      </div>
    </section>
  );
}

export default Contact;