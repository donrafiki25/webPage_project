import '../Styles/Card.css';
import NoSnapshot from "../assets/NoPhotoLoaded.svg";
import { useState } from 'react';

interface CardProps{
    snapshot?: string|undefined,
    projectName: string,
    projectDescription?: string|null,
    onClick?: () => void
}

export default function Card(props: CardProps) {
    
    const [collapseExpand, setCollapseExpand] = useState<boolean>(false);

    function collapseExpandIcon(): boolean {
        if(collapseExpand === true){
            setCollapseExpand(false);
            
            return false;
        } else {
            setCollapseExpand(true);
            
            return true;
        }}

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
                    V
                </div>
            </div>
        </li>
    )
}