import React from 'react';
import image  from '../1598485202477.jpg'
import logo from '../FS_wiki.png'

function Home() {

    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h1 style={{ backgroundColor: 'black', color: 'white', padding: '10px', width: '80%', borderRadius: '30px' }}>My Name Is Patrick Mason, Welcome to My Portfolio!</h1>
    <img src={image} alt="home pic" style={{ borderRadius: '50%', width: '40%', marginTop: '20px', border: '2px solid black' }} />
    <div>
        <p style={{backgroundColor: 'black', color: 'white', padding: '10px', width: '80%', margin: '20px auto', borderRadius: '25px', fontSize: '1.4em', textAlign: 'center'}}>I'm a software engineer and a graduate of <b>Flatiron School</b>, with experience in JavaScript, React, Ruby on Rails, and SQL!</p>
        <p style={{backgroundColor: 'black', color: 'white', padding: '10px', width: '80%', margin: '20px auto', borderRadius: '25px', fontSize: '1.4em', textAlign: 'center'}}>Coming from a marketing background, I really enjoy finding elegant technological solutions to achieve results that elevate performance, and create lasting change for businesses and individual stakeholders.</p>
    </div>
    <img src={logo} alt="flatiron logo" style={{ width: '50%', marginTop: '20px' }} />
</div>
    )
}


export default Home;