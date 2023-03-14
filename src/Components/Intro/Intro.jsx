import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy4.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {themeContext} from '../../Context';
import { useContext } from "react";
// import { motion } from 'framer-motion';
const Intro = () => {

    // const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color:darkMode? 'white': '' }}>Hi! I Am</span>
                <span>Faisal Muhammad Ibrahim</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis a tenetur dignissimos est dolor quo, atque.</span>
            </div>

            <button className="button i-button">Here me</button>
            <div className="i-icons">
                <a href=''> <img src={Github} alt="" /></a>
               
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />

            <img
          src={glassesimoji}
          alt=""
        />
            
            <div  className='floating-div'
            style={{top:'0rem', left: '20rem'  }}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>

            <div
                className='floating-div'
            style={{top:'18rem', left: '2rem'  }}>
                <FloatingDiv image={thumbup} txt1='Software' txt2='Developer'/>
            </div>
            {/* blur divs */}
            <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
            <div className='blur' style={{ background: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'}}></div>
        </div>
   </div>
  )
}

export default Intro