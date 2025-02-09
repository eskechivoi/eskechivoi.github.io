import React from 'react'

const About = () => {
    return(
        <>
            <h1 style={{marginTop: '50px', textAlign: 'center'}}>About me</h1>
            <hr className="hr-socials"/>
            <div className="row justify-content-center">
                <div className="col-sm-2"></div>
                <div className="col-lg-8">
                    <h4>I am a Computer Science graduate from the University of Valladolid, with a C2 level of proficiency in English. 
                    I have a keen interest in DevSecOps, driven by my love for cybersecurity, coding, and infrastructure, and a passion for undertaking my own projects. </h4>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </>
    );
};

export default About;