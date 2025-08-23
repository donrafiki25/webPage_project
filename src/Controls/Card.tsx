import '../UI/Card.css'

interface CardProps{
    snapshot?: string|null,
    projectName: string,
    projectDescription?: string|null
}

export default function Card(props: CardProps) {
    
    return(
        <li>
            <div id="card">
                <div id="card_leftSide">
                    <div></div>
                    {props.snapshot !== null ? <img src={props.snapshot}></img> : <></>}
                    
                </div>
                <div id="card_rightSide">
                    <div id='cardTitle'>
                        {props.projectName}
                    </div>
                    <div id="cardDescription">
                        {props.projectDescription !== null ? props.projectDescription : "No description"}
                    </div>
                    {/* <a className="diceeLink" href="./Dicee/dicee.html">Dicee</a> */}
                </div>
            </div>
        </li>
    )
}