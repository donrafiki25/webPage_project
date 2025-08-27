import '../Styles/Card.css';
import NoSnapshot from "../assets/NoPhotoLoadedIcon.svg";
import ChevronExpand from "../assets/Chevron_Double_Expand.svg";
import ChevronCollapse from "../assets/Chevron_Double_Collapse.svg";


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
                <div id="card_leftSide" className='center'>
                    {props.snapshot !== undefined ? <img className='snapshot' src={props.snapshot}></img>: <img className='snapshot' src={NoSnapshot}></img>}
                    
                </div>
                <div id="card_rightSide">
                    <div id='cardTitle'>
                        {props.projectName}
                    </div>
                    <div id="cardDescription">
                        {props.projectDescription !== undefined ? props.projectDescription : "No description"}
                    </div>
                </div>
                <div id='collapseExpand'>
                    {props.collapseExpand !== undefined ? (props.collapseExpand ? <img src={ChevronCollapse}></img> : <img src={ChevronExpand}></img>) : <></>}
                </div>
            </div>
        </li>
    )
}