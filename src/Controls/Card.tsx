import '../Styles/Card.css';
import NoSnapshot from "../assets/NoPhotoLoaded.svg";

interface CardProps{
    snapshot?: string|undefined,
    projectName: string,
    projectDescription?: string|null
}

export default function Card(props: CardProps) {
    
    return(
        <li>
            <div id="card">
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
            </div>
        </li>
    )
}