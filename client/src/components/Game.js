import React, { useState, useEffect } from 'react';
import Opponent from './Opponent';
import PlayArea from './PlayArea';
import You from './You';

const Game = (props) => {
    const [link] = useState(props)
    const [spiderPlayer, setSpiderPlayer] = useState({
        name: "Player1",
        health: 10,
        poison: 0,
        prevUsed: null,
        bossUsed: false,
        cardPlayed: null
    });
    const [trollPlayer, setTrollPlayer] = useState({
        name: "Player2",
        health: 10,
        poison: 0,
        prevUsed: null,
        bossUsed: false,
        cardPlayed: null
    });
    
    return (
        <div>
            <Opponent/>
            <hr></hr>

            <PlayArea/>
            <hr></hr>
            <You/>
            {/* <p>watch code: {link}</p>
            <div>
                
                <div name="playArea">

                </div>
            
                
            </div> */}
        </div>
    )
}

export default Game