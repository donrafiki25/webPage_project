interface AboutProps{
    openAbout: () => boolean
}

import '../Styles/About.css';
import CloseIcon from '../assets/CloseIcon.svg';
import EasterEggIcon from '../assets/DiskAlertIcon.svg';

import EasterEgg from './EasterEgg';

export default function About(props: AboutProps) {

    return(<>
        <div id='modal'>
            <div id="aboutModal">
                <div id='headerAbout'>
                    <h1 className='title'>About this page</h1>
                    <button onClick={() => props.openAbout()} id='closeModal'>
                        <img src={CloseIcon}></img>
                    </button>
                </div>
                <div id='contentAbout'>
                    <p>This page was made with the intention of a self-learn approach, making a web page with multiple projects. These projects could turn into their own thing, but meanwhile they are just prototypes.</p>
                </div>
                <div id='footerAbout' className='center'>
                    <p>By Rafael Agustin Lopez Hernandez</p>
                    <EasterEgg snapshot={EasterEggIcon}/>
                </div>
            </div>
        </div>
    </>)
}