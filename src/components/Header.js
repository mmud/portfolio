import React from 'react'
import { NavLink,Link } from "react-router-dom";
import "./Header.css"
export default function Header() {
  return (
    <>
        <header className='header'>
            <Link to="/"><img src={require("../imgs/logo.png")} /></Link>
            <nav className='navbar'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/skills">Skills</NavLink>
            </nav>
            <i className="fa-solid fa-bars menu"></i>
        </header>
        <div className='margin'></div>
    </>
  )
}
