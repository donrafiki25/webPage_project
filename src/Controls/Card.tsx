import '../Styles/Card.css';
import NoSnapshot from "../assets/NoPhotoLoaded.svg";
import { useState } from 'react';

interface CardProps{
    snapshot?: string|undefined,
    projectName: string,
    projectDescription?: string|null,
    collapseExpand?: boolean,
    onClick?: () => void
}

export default function Card(props: CardProps) {

    return(
        <li>
            <div id="card" onClick={props.onClick}>
                <div id="card_leftSide">
                    {props.snapshot !== undefined ? <img className='snapshot' src={props.snapshot}></img>: <img className='snapshot' src={NoSnapshot}></img>}
                    
                </div>
                <div id="card_rightSide">
                    <div id='cardTitle'>
                        {props.projectName}
                    </div>
                    <div id="cardDescription">
                        {props.projectDescription !== null ? props.projectDescription : "No description"}
                    </div>
                </div>
                <div id='collapseExpand'>
                    {/* {!collapseExpand ? <img></img> : <img></img>} */}
                    {props.collapseExpand ? <>V</> : <>/\</>}
                </div>
            </div>
        </li>
    )
}