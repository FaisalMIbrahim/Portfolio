import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card';
import Download from './download.pdf';
import {themeContext} from '../../Context';
import { useContext } from "react";


const Service = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="service" id='Services'>

        {/* left side */}
        <div className="awesome" > 
            <span style={{ color:darkMode? 'white': '' }}>My Awesome</span>
            <span>Service</span>
            <spane>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                ipsam fuga libero dicta nemo sequi culpa facere quam inventore.
            </spane>
            <a href={Download} download>
            <button className='button s-button'>Download</button>
            </a>
         
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="card">
           <div 
           style={{ top: "-1rem", left: "13rem" }}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = { "Photoshop, Adobe, Figma"}
                /> 
           </div>
        </div>

        {/* Second side */}
        <div className="card">
           <div 
           
          
           style={{ top: "12rem", left: "-4rem" }}>
                <Card
                  emoji = {Glasses}
                  heading = {'Developer'}
                  detail = { "Html, Css, JavaScript, React"}
                /> 
           </div>
        </div>
        {/* 3 rd */}
        <div className="card">
           <div 
          
           style={{ top: "19rem", left: "12rem" }}>
                <Card
                  emoji = {Humble}
                  heading = {'UI/UX'}
                  detail = { " Lorem ipsum dolor sit amet."}
                /> 
           </div>
           <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
    </div>

  )
}

export default Service