import Header from "../Header/Header.js";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll"
const Hero = () => {  
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "115px" : "155px" }}
            whileInView={{ left: "5px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Me You And Only Fitness</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">hustle </span>
            <span>for</span>
          </div>
          <div>
            <span>muscle</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={1300} start={1100} delay='4' preFix='+'/>
            </span>
            <span>Exercise</span>
          </div>
          <div>
            <span><NumberCounter end={500} start={300} delay='4' preFix='+'/></span>
            <span>Diets</span>
          </div>
          <div>
            <span><NumberCounter end={100} start={50} delay='4' preFix='+'/></span>
            <span>User</span>
          </div>
        </div>
        {/* hero button */}
        <div className="hero-button">
         <button className="btn"><Link to='reason' spy={true} smooth={true} >Get Started</Link></button>
          <button className="btn"><Link to='testimonials' spy={true} smooth={true} >Learn More</Link></button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn shake" onClick={()=>{window.scrollTo({ top: 4000, left: 100, behavior: 'smooth' })}}>Contact Us</button>
        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span><NumberCounter end={116} start={77} delay='4'/> bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span><NumberCounter end={220} start={110} delay='4'/> kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
