import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from 'framer-motion'
const Testimonial = () => {
  const transition = {type: 'spring', duration: 3}
  const [select, setSelect] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-t">
        <span> <hr className="hrr"/>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
         key={select}
         initial={{opacity: 0, x: -100}}
         animate={{opacity: 1, x: 0}}
         exit={{opacity: 0, x: -100}}
         transition={{...transition,duration: 2}}
        >{testimonialsData[select].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[select].name}
          </span>{" "}
          - {testimonialsData[select].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
        initial={{opacity: 0, x: -100}}
        transition={{...transition,duration: 2}}
        whileInView={{opacity: 1, x: 0}}
        ></motion.div>
        <motion.div
         initial={{opacity: 0, x: 100}}
         transition={{...transition,duration: 2}}
         whileInView={{opacity: 1, x: 0}}
        ></motion.div>
        <motion.img
        key={select}
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={transition}
        src={testimonialsData[select].image} alt="" />
      <div className="blur blur-t"></div>
        <div className="arrow">
          <img
            onClick={() => {
              select === 0 ? setSelect(tLength - 1) : setSelect(select - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              select === (tLength-1) ? setSelect(0) : setSelect(select + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
