import React from 'react'
import './works.css';
import p1 from '../../assets/portfolio-1.png';
import p2 from '../../assets/portfolio-2.png';
import p3 from '../../assets/portfolio-3.png';
import p4 from '../../assets/portfolio-4.png';
import p5 from '../../assets/portfolio-5.png';
import p6 from '../../assets/portfolio-6.png';




const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur aperiam nobis laudantium tempora accusamus cum aut, eaque facere dolores hic, qui, provident consequatur. Ratione repudiandae facilis placeat eligendi, voluptate nam?</span>

        <div className="workImgs">
            <img src={p1} alt="" className="worksImg"/>
            <img src={p2} alt="" className="worksImg"/>
            <img src={p3} alt="" className="worksImg"/>
            <img src={p4} alt="" className="worksImg"/>
            <img src={p5} alt="" className="worksImg"/>
            <img src={p6} alt="" className="worksImg"/>
        </div>

        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works
