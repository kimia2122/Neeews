import React from "react";
import Title from "./Title";
import Guidance from "./Guidance";
import Why from "./Why";
import Aboutme from "./Aboutme";

const About = () => {

    return (
        <div className="ui container"> 
            <Title />
            <Guidance />
            <Why />
            <Aboutme />
        </div>
    );
};

export default About;