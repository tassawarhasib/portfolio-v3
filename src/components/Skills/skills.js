import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';




const skills = () => {
  return (
    <section id='skills'>
        <span className="skillsTitle">What I do</span>
        <span className="skillDesc">I am skilled and Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae quidem harum illo esse, perspiciatis veritatis porro est numquam molestias laborum repellendus deserunt pariatur quia sequi! Nemo expedita corporis dolores?</span>

        <div className="skillBars">

          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, deserunt?</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia.</p>
            </div>
          </div>

        </div>


    </section>
  )
}

export default skills;
