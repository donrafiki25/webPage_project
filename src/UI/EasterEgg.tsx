interface EasterEggProps{
    snapshot: string
}

import { useState } from 'react';

export default function EasterEgg(props: EasterEggProps) {

    const [clickCounter, setClickCounter] = useState<number>(0);

    const counter = () => {
        setClickCounter(clickCounter + 1);
        console.log("Counter: " + clickCounter);
    }

    return(
        <>
            <img src={props.snapshot} onClick={counter}></img>
            {clickCounter === 11 ? (
                <div>
                    <h1>This is an easter egg, shhhh</h1>
                    <div>
                        <img></img>
                    </div>
                </div>): <></>}
        </>
    )
}