import React, { useState, useEffect } from 'react';
import Opponent from './Opponent';
import PlayArea from './PlayArea';
import You from './You';

const Game = (props) => {
    const {link, boss} = props;
    const [you, setYou] = useState({});
    const [opponent, setOpponent] = useState({});
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

    useEffect(() => {
        if (boss == "spider") {
            setOpponent(trollPlayer);
            setYou(spiderPlayer);
        } else {
            setYou(trollPlayer);
            setOpponent(spiderPlayer);
        }
    }, [])
    
    return (
        <div>
            <Opponent opponent={ opponent } />
            <hr></hr>

            <PlayArea you={ you } opponent={ opponent } />
            <hr></hr>
            <You boss={ boss } link={link} you={ you } />
            {/* <p>watch code: {link}</p>
            <div>
                
                <div name="playArea">

                </div>
            
                
            </div> */}
        </div>
    )
}

export default Game