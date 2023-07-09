import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { IoStatsChartOutline} from "react-icons/io5";

import {RiMessage2Line} from "react-icons/ri";
import { useState } from "react";
const Nav = () => {
  const [Active, setActive] = useState("#");
  return (
    <nav>
      {/* <a href="#header" onClick={()=>setActive('#')}className={Active==='#'? 'active':''}><AiOutlineHome /></a>

      <a href="#about" onClick={()=>setActive('#about')}  className={Active==='#about'? 'active':''}>
 
      <AiOutlineUser /></a>

      <a href="#experience"onClick={()=>setActive('#experience')}  className={Active==='#experience'? 'active':''}><BiBook /></a>

      <a href="#services"onClick={()=>setActive('#services')}  className={Active==='#services'? 'active':''}><RiServiceLine /></a>
      <a href="#contant"onClick={()=>setActive('#contant')}  className={Active==='#contant'? 'active':''}><BiMessageSquareDetail /></a> */}

      <Link
        to="header"
        // spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActive("#")}
        className={Active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>

      <Link
        to="about"
        // spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActive("#about")}
        className={Active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>

      <Link
        to="experience"
        // spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActive("#experience")}
        className={Active === "#experience" ? "active" : ""}
      >
        <SiGoogleclassroom />
      </Link>

      <Link
        to="Portfolio"
        // spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActive("#services")}
        className={Active === "#services" ? "active" : ""}
      >
  
        <IoStatsChartOutline/>
        {/* <IoStatsChart/> */}
      </Link>

      <Link
        to="contant"
        // spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={() => setActive("#contant")}
        className={Active === "#contant" ? "active" : ""}
      >
        
        <RiMessage2Line/>
      </Link>
    </nav>
  );
};

export default Nav;
