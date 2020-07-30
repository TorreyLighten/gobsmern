import React, { useState, useEffect } from 'react';
import Opponent from './Opponent';
import PlayArea from './PlayArea';
import You from './You';
import io, { Socket } from 'socket.io-client';

const Game = (props) => {
    const {link, boss} = props;
    const [you, setYou] = useState({});
    const [opponent, setOpponent] = useState({});
    const [socket] = useState(() => io(':8000'))
    const [spiderPlayer, setSpiderPlayer] = useState({
        name: "Player1",
        boss: "Spider",
        health: 10,
        poison: 0,
        prevUsed: null,
        bossUsed: false,
        cardPlayed: null
    });
    const [trollPlayer, setTrollPlayer] = useState({
        name: "Player2",
        boss: "Troll",
        health: 10,
        poison: 0,
        prevUsed: null,
        bossUsed: false,
        cardPlayed: null
    });

    useEffect(() => {
        socket.on('resolveTurn', player => {
            if (player.name == spiderPlayer.name) {
                setSpiderPlayer(player);
            } else if (player.name == trollPlayer.name) {
                setTrollPlayer(player);
            } 
        })
        if (boss == "spider") {
            setOpponent(trollPlayer);
            setYou(spiderPlayer);
        } else {
            setOpponent(spiderPlayer);
            setYou(trollPlayer);
        }
    }, [])
        console.log("opponent in game.js",opponent)
        console.log("you from game.js", you)
    return (
        <div>
            <Opponent opponent={ opponent } />
            <hr></hr>

            <PlayArea you={ you } setYou={ setYou } opponent={ opponent } setOpponent={ setOpponent } />
            <hr></hr>
            <You boss={ boss } link={link} you={ you } socket={ socket }/>
            {/* <p>watch code: {link}</p>
            <div>
                
                <div name="playArea">

                </div>
            
                
            </div> */}
        </div>
    )
}

export default Game