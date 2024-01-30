import React from 'react';
import image  from '../1598485202477.jpg'
import logo from '../FS_wiki.png'

function Home() {

    return (
        <div>
            <h1 style={{textAlign: 'center', backgroundColor: 'black', borderStyle: 'solid', color: 'white', padding: "10px", width: "50%", marginLeft: "auto", marginRight: "auto", borderRadius: "30px"}}>My Name Is Patrick Mason, Welcome to My Portfolio!</h1>
            <img src={image} alt='home pic' style={{borderRadius: '500px', width: "40%", borderStyle: "solid"}}/>
            <p style={{width: "50%", float: "right", borderStyle: "solid", backgroundColor: "black", color: "white", padding: "10px", textAlign: 'center', fontSize: '140%', borderRadius: "25px"}}>Hello! I'm Patrick. I am a software engineer and a graduate of <b>Flatiron School</b>, with experience in JavaScript, React, Ruby on Rails, as well as other important industry knowledge!</p>
            {/* <p style={{width: "50%", float: "right", borderStyle: "solid", backgroundColor: "black", color: "white", padding: "5px", marginTop: '-400px', textAlign: 'center',  fontSize: '18px'}}> </p> */}
            <span style={{width: "50%", float: "right", borderStyle: "solid", backgroundColor: "black", color: "white", padding: "10px", textAlign: 'center',  fontSize: '140%', marginTop: '-25%', borderRadius: "25px"}}>Coming from a marketing background, I really enjoy finding elegant technological solutions to achieve results that elevate performance, and create lasting change for businesses and individual stakeholders.</span>
            <img src={logo} alt='flatiron logo' style={{width: '50%', float: 'right', marginTop: '-15%'}}/>
        </div>
    )
}


export default Home;