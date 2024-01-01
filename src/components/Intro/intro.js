import React from 'react'
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm
            <span className="introName">Tassawar</span>
            <br />
            Full Stack Engineer</span>
            <p className="introPara">As a passionate computer science professional,<br /> I'm dedicated to transforming ideas into innovative digital solutions. <br/> With experience in web development and project management, <br /> I've contributed to the successful delivery of web solutions.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
