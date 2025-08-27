interface EasterEggProps{
    snapshot: string
}

import { useState } from 'react';

export default function EasterEgg(props: EasterEggProps) {

    const [clickCounter, setClickCounter] = useState<number>(0);

    function counter() : number{
        return 0;
    }

    return(
        <>
            <img src={props.snapshot} ></img>
        </>
    )
}