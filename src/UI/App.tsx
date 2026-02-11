import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router';

import '../Styles/General.css';
import '../Styles/App.css';

import DiceeSnapshot from "../assets/Dicee/DiceeCardSnapshot.png";
import PortfolioIcon from "../assets/Portfolio.svg";
import MusicBlogIcon from "../assets/MusicBlogIcon.svg";

import HomeIcon from '../assets/HomeIcon_Fill.svg';
import LinkedInIcon from '../assets/LinkedInIcon.svg';
import CVIcon from '../assets/CurriculumVitaeIcon.svg';
import EmailIcon from '../assets/ContactEmailIcon.svg';

import Card from '../Controls/Card';
import About from './About';

import CVPDF from "../assets/Documents/2026_CV_RALH.pdf";

import MusicBlog from './MusicBlog';
import Portfolio from'./Portfolio';

function App() {

    let navigate = useNavigate();

    let [displayDicee, setDisplayDicee] = useState<boolean>(false);
    let[displayMusicBlog, setDisplayMusicBlog] = useState<boolean>(false);
    let [displayPortfolio, setDisplayPortfolio] = useState<boolean>(false);
    let [displayAbout, setDisplayAbout] = useState<boolean>(false);

    function displayDiceeScreen(): boolean {
        if(displayDicee === true){
            navigate('/');
            setDisplayDicee(false);
            
            return false;
        } else {
            navigate('/Dicee');
            setDisplayDicee(true);
            
            return true;
        }
    }

    function displayPortfolioScreen(): boolean {
        if(displayPortfolio === true){
            setDisplayPortfolio(false);
            return false;
        } else {
            setDisplayPortfolio(true);
            return true;
        }
    }

    function openMusicBlog(): boolean {
        if(displayMusicBlog === true){
            setDisplayMusicBlog(false);
            return false;
        } else {
            setDisplayMusicBlog(true);
            return true;
        }
    }

    function openAbout(): boolean {
        if(displayAbout === true){
            setDisplayAbout(false);
            return false;
        } else {
            setDisplayAbout(true);
            return true;
        }
    }

    let currentYear: number = new Date().getFullYear();

  return (
    <>
        <div id="topbar">
            <div id="leftSide">
                <button id='homeButton' disabled>
                    <img src={HomeIcon}></img>    
                </button> 
            </div>
            <div id="centerSide">
                <h1 className="title">Personal projects</h1>
            </div>
            <div id="rightSide">
                <button id='aboutButton' onClick={() => openAbout()}>About this page</button>
                {displayAbout ? <About openAbout={() => openAbout()}/> : <></>}
            </div>
        </div>
        <div id="content">
            <ul id="cardList">
                <h2>Courses</h2>
                <h3>Udemy</h3>
                    <Card snapshot={DiceeSnapshot} projectName='Dicee' projectDescription='Game of two dice, random numbers and two players.' onClick={() => displayDiceeScreen()} collapseExpand={displayDicee} />
                    {displayDicee ? <Outlet/>:  <></>}
            </ul>
            <ul id="cardList">
                <h2>Personal projects</h2>
                    <Card snapshot={PortfolioIcon} projectName='Portfolio' projectDescription="Portfolio of different projects, as work previously done." onClick={() => displayPortfolioScreen() } collapseExpand={displayPortfolio}/>
                        {displayPortfolio ? <Portfolio/> : <></>}
                    <Card snapshot={MusicBlogIcon} projectName='Music blog' projectDescription="A UI prototype for a music blog, where to find music and the history of the bands. [UNDER CONSTRUCTION]" onClick={() => openMusicBlog()} collapseExpand={displayMusicBlog} />
                        {displayMusicBlog? <MusicBlog/> : <></>}
                    <Card projectName='Techat [Name not final?]' projectDescription={"Personal blog where I would talk about tech, music, and news. [UNDER CONSTRUCTION]"} />
            </ul>
            
        </div>
        <div id="footer">
            <div id="leftSide">
                <p>Rafael Agustín López Hernández, {currentYear !== null ? currentYear : "Current year not available"}</p>
            </div>
            <div id="rightSide">
                <button onClick={() => window.open("https://www.linkedin.com/in/rafael-agustín-lópez-hernández-420085191", '_blank')}> <img src={LinkedInIcon} title='Linkedin Profile'></img></button>
                <button onClick={() => window.open(CVPDF, '_blank')}><img src={CVIcon} title='Curriculum Vitae'></img></button>
                <button onClick={() => window.open('mailto:rafael.ralh@gmail.com?subject=Contact', '_blank')}><img src={EmailIcon} title='Email'></img></button>
            </div>
        </div>
    </>
  )
}

export default App
