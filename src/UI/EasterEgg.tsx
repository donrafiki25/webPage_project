interface EasterEggProps{
    snapshot: string
}

import { useState } from 'react';

export default function EasterEgg(props: EasterEggProps) {

    const [clickCounter, setClickCounter] = useState<number>(0);

    const counter = () => {
        setClickCounter(clickCounter + 1);
        // console.log("Counter: " + clickCounter);
    }

    return(
        <>
            
            {clickCounter === 11 ? (
                <div>
                    <p>This is an easter egg, shhhh</p>
                </div>): <img src={props.snapshot} onClick={counter}></img>}
        </>
    )
}