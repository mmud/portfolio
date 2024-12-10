import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='home'>
        <div className='text'>
            <h2>Hello <span>this is</span></h2>
            <h1><span>Mahmoud</span> Shaban</h1>
            <p className='paragraph'>competitive programmer | software engineer | CSIT Student @E-JUST</p>
            <div className='social'>
               <a href='https://www.linkedin.com/in/mahmoud-shaban-amer/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
               <a href='https://github.com/mmud' target='_blank'><i className="fa-solid fa-code"></i></a>
               <a href='https://www.youtube.com/@xgamespro' target='_blank'><i className="fa-brands fa-youtube"></i></a>
               <a href='mailto:mahmoud.shaban.amer@gmail.com'><i className="fa-solid fa-envelope"></i></a>
            </div>
            <div className='btn-section'>
                <a href={require('../MahmoudShaabanAmer.docx')} target="_blank" download className='btn'>DOWNLOAD CV</a>
                <Link to="/skills" className='btn'>MY SKILLS</Link>
            </div>
        </div>
        <div className='homeimg'><img src={require("../imgs/home.jpg")}/></div>
    </div>
  )
}
