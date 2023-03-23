import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData.js'
import RightArrow from '../../assets/rightArrow.png'
const Program = () => {
  return (
    <div className="programs" id="programs">
        {/* header */}
        <div className="program-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Exercises</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program,index)=>(
                <div className="category" key={index}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span style={{fontSize:"1rem"}}>{program.details}</span>
                    <div className="join-now"><span>isn't it cool?</span><img src={RightArrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program