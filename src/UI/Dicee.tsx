import '../Styles/Dicee.css';

import Dice1 from '../assets/Dicee/dice1.png';
import Dice2 from '../assets/Dicee/dice2.png';
import Dice3 from '../assets/Dicee/dice3.png';
import Dice4 from '../assets/Dicee/dice4.png';
import Dice5 from '../assets/Dicee/dice5.png';
import Dice6 from '../assets/Dicee/dice6.png';

export default function Dicee() {

    function randomizeDicesGame() {

        let ranDice1: number = Math.floor(Math.random()*6);
        let ranDice2: number = Math.floor(Math.random()*6);

        const imageArray: Array<string> = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

        console.log("Dice 1: " + ranDice1 + " Dice 2: " + ranDice2);

        document.getElementById('dicePlayer1')?.setAttribute('src', imageArray[ranDice1]);
        document.getElementById('dicePlayer2')?.setAttribute('src', imageArray[ranDice2]);

        if (ranDice1 > ranDice2){
            console.log('Player 1 Won!');
            document.getElementById('diceTitle')!.innerHTML = "<-- Player 1 Won!";
        } else if(ranDice1 < ranDice2) {
            console.log('Player 2 Won');
            document.getElementById('diceTitle')!.innerHTML = "Player 2 Won! -->";
        } else {
            console.log('Tie? Draw again');
            document.getElementById('diceTitle')!.innerHTML = "A tie? Roll again!";
        }
    }

    return(
        <div id='body_Dicee'>
            <div id="topbar_Dicee">
                <h1 id='titleDicee'>Dicee</h1>
            </div>
    
            <div id="content_Dicee">
                <img className='dices' id='dicePlayer1' src={Dice1}></img>
                <h1 onClick={() => randomizeDicesGame()} id='diceTitle'>Roll the dice!</h1>
                <img className='dices' id='dicePlayer2' src={Dice1}></img>
            </div>

        </div>
    );
}