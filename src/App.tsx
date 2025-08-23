import './General.css'
import './App.css'

import ReactIcon from "./assets/react.svg"

import Card from './Controls/Card'

function App() {

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
                <Card snapshot={ReactIcon} projectName='Dicee' projectDescription='Game of two dice, random numbers.'/>
                <Card projectName='Coming soon'/>
                <Card projectName='Coming soon'/>
                <Card projectName='Coming soon'/>
                <Card projectName='Coming soon'/>
                <Card projectName='Coming soon'/>
        </ul>
        
    </div>
    <div id="footer">
        <div id="leftSide">
            <p>Rafael Agustín López Hernández, 2025</p> 
        </div>
        <div id="rightSide">
            <button>LinkedIn</button>
            <button>Email</button>
            <button>Curriculum Vitae</button>
            <button>Button</button>
        </div>
    </div>
    </>
  )
}

export default App
