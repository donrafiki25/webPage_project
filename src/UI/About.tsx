interface AboutProps{
    openAbout: () => boolean
}

import '../Styles/About.css';
import CloseIcon from '../assets/CloseIcon.svg';

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
                    <p>Content</p>
                </div>
                <div id='footerAbout'>
                    <p>Footer</p>
                </div>
            </div>
        </div>
    </>)
}