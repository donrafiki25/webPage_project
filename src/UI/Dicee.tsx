import '../Styles/Dicee.css';

import { useNavigate } from 'react-router';

export default function Dicee() {

    const navigate = useNavigate();

    console.log("Clicked on Dicee");

    return(
        <div id='body_Dicee'>
            <div id="topbar">
                <div id="leftSide">
                    <button title='Wololo' onClick={() => navigate('/')}>Close</button>
                </div>
                <div id="centerSide">
                    <h1>Dicee</h1>
                </div>
                <div id="rightSide">
                    <button>One</button>
                </div>
            </div>
    
            <div id="content">Wololo</div>

        </div>
    );
}