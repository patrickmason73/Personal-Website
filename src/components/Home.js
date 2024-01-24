import React from 'react';
import image  from '../1598485202477.jpg'
import logo from '../FS_wiki.png'

function Home() {

    return (
        <div>
            <h1 style={{textAlign: 'center', backgroundColor: 'black', borderStyle: 'groove', color: 'white', padding: "10px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>My Name Is <u>Patrick Mason</u>, Welcome to My Portfolio!</h1>
            <img src={image} alt='home pic' style={{borderRadius: '500px', width: "40%", borderStyle: "solid"}}/>
            <p style={{width: "50%", float: "right", borderStyle: "solid", backgroundColor: "black", color: "white", padding: "10px", textAlign: 'center', fontSize: '20px'}}>Hello! I'm Patrick. I recently moved from a career in marketing to pursue a field I have a passion for, web development. I graduated from the <b>Flatiron School</b>, a coding bootcamp that trained me in JavaScript, React, Ruby, and Rails, as well as other important industry knowledge!</p>
            {/* <p style={{width: "50%", float: "right", borderStyle: "solid", backgroundColor: "black", color: "white", padding: "5px", marginTop: '-400px', textAlign: 'center',  fontSize: '18px'}}> </p> */}
            <span style={{width: "50%", float: "right", borderStyle: "solid", backgroundColor: "black", color: "white", padding: "10px", textAlign: 'center',  fontSize: '18px', marginTop: '-20%'}}>It is my goal to build a successful career in web development, I thrive in an environment where I am consistently learning new things and advancing my capabilities.</span>
            <img src={logo} alt='flatiron logo' style={{width: '50%', float: 'right', marginTop: '-10%'}}/>
        </div>
    )
}


export default Home;