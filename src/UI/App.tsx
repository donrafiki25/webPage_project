import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router';

import '../Styles/General.css';
import '../Styles/App.css';

import ReactIcon from "../assets/react.svg";

import Card from '../Controls/Card';

function App() {

    let navigate = useNavigate();

    let [displayDicee, setDisplayDicee] = useState<boolean>(false);

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



  return (
    <>
      <div id="topbar">
        <div id="leftSide">
              <button disabled>Home</button> 
        </div>
        <div id="centerSide">
            <h1 id="title">Personal projects</h1>
        </div>
        <div id="rightSide">
            <button>Button</button>
            <button>Button</button>
        </div>
    </div>
    <div id="content">
        <ul>
            <h2>Udemy</h2>
            <h3>Angela Yu</h3>
                <Card snapshot={ReactIcon} projectName='Dicee' projectDescription='Game of two dice, random numbers.' onClick={() => displayDiceeScreen()} collapseExpand={displayDicee} />
                {displayDicee ? <Outlet/>:  <></>}
        </ul>
        <ul>
                <Card projectName='Music blog' projectDescription="A UI prototype for a music blog, where to find music and the history of the bands." />
                <Card projectName='Techat [Name not final?]' projectDescription={"Personal blog where I would talk about tech, music, and news."} />
                <Card projectName='Coming soon' />
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
