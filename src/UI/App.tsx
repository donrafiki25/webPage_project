import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router';

import '../Styles/General.css';
import '../Styles/App.css';

import DiceeSnapshot from "../assets/Dicee/DiceeCardSnapshot.png";
import PortfolioIcon from "../assets/Portfolio.svg";
import HomeIcon from '../assets/HomeIcon_Fill.svg';

import Card from '../Controls/Card';
import About from './About';

function App() {

    let navigate = useNavigate();

    let [displayDicee, setDisplayDicee] = useState<boolean>(false);
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
            navigate('/');
            setDisplayPortfolio(false);
            
            return false;
        } else {
            navigate('/Portfolio');
            setDisplayPortfolio(true);
            
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
            <button id='aboutButton' onClick={() => openAbout()}>About</button>
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
                    {displayPortfolio ? <Outlet/> : <></>}
                <Card projectName='Music blog' projectDescription="A UI prototype for a music blog, where to find music and the history of the bands. [UNDER CONSTRUCTION]" />
                <Card projectName='Techat [Name not final?]' projectDescription={"Personal blog where I would talk about tech, music, and news. [UNDER CONSTRUCTION]"} />
        </ul>
        
    </div>
    <div id="footer">
        <div id="leftSide">
            <p>Rafael Agustín López Hernández, 2025</p>
        </div>
        <div id="rightSide">
            <button onClick={() => window.open("https://www.linkedin.com/in/rafael-agustín-lópez-hernández-420085191", '_blank')}>LinkedIn</button>
            <button>Curriculum Vitae</button>
            <button>Email</button>
        </div>
    </div>
    </>
  )
}

export default App
