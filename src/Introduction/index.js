import React from "react";
import './style.css'

const Intro=()=>{
return (
    <div>
        <h1 className="heading">What I have learnt about ReactJS &#9997;</h1>
        <ol className="listing">
        <li>&#10148; It has usable components</li><br/>
        <li>&#10148; The writing format is JS</li><br/>
        <li>&#10148; It is fast</li><br/>
        <li>&#10148; It is scalable and descriptive</li>
      </ol>
      <hr className="horiz"/>
      <h1 className="heading2">Use cases of ReactJS</h1>
      <h2 className="uses">React can be used to build a wide range <br/> of applications including;</h2>
      <ol id="list2">
      <li>&#10148;Single-page applications (SPAs)</li><br/>
        <li>&#10148;Progressive web applications (PWAs)</li><br/>
        <li>&#10148;Mobile applications using React Native</li><br/>
        <li>&#10148;Interactive user interfaces</li><br/>
        <li>&#10148;Real-time data-driven applications</li>

      </ol>
    </div>
);
};
export default Intro;