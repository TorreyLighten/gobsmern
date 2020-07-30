import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Cards = (you, opponent) => {
    const [socket] = useState(() => io(':8000'))
    const [chat, setChat] = useState(["Welcome to Snakes & Goblins!!"]);
    const [cardsPlayed, setCardsPlayed] = useState({
        oneCP:null,
        twoCP:null
    })
    
    // useEffect(() => {
    //     let [...curChat] = chat;
    //     console.log(chat);
    //     curChat.push("Welcome to Snakes & Goblins!!");
    //     setChat(curChat);
    // }, [])

    useEffect(()=>{
        socket.on('chat', data => {
            let [...curChat] = chat;
            curChat.push(data);
            setChat(curChat);
        });

        socket.on('trollCP', data => {
            cardHandler2(data)
        });

        socket.on('spiderCP', data => {
            cardHandler1(data)
        });

        return () => socket.disconnect(true);
    },[])

    const cardHandler2 = (data) => {
        if (data!=null){

            setCardsPlayed({...cardsPlayed, twoCP: data});
            console.log(cardsPlayed);
        }
    }
    const cardHandler1 = (data) => {
        if (data!=null){

            setCardsPlayed({...cardsPlayed, oneCP: data});
            console.log(cardsPlayed);
        }
    }

    
    const resolveTurn=(you, opponent)=>{
        if (you.cardPlayed="Troll"){
            Troll(you, opponent)
        }
        else if(you.cardPlayed="Snake"){
            Snake(you,opponent)
        }
        else if(you.cardPlayed="Shield"){
            Shield(you,opponent)
        }
        else if(you.cardPlayed="Antidote"){
            Antidote(you,opponent)
        }
        else if(you.cardPlayed="Goblin"){
            Goblin(you,opponent)
        }
        else {
            Spider(you,opponent)
        }
        handleWin()
        handlePoison()
        handleWin()
    }
    

    const Goblin = (you, opponent) => {
        if (opponent.cardPlayed != "Troll" && opponent.cardPlayed != "Shield") {
            opponent.health-=3;
            let message = you.name + " played goblin, and did three damage to " + opponent.name + "."
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        } else {
            let message = you.name + " played goblin, but it was stopped by " + opponent.name + "."
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
    }

    const Snake = (you, opponent) => {
        if (opponent.cardPlayed != "Spider") {
            opponent.poison++;
            let message = you.name + " played snake, it poisoned " + opponent.name + "."
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
        
    }

    const handlePoison = (you, opponent) => {
        if (you.poison > 0) {
            you.health-=you.poison
            let message = you.name + " took " + you.poison + " damage from poison.";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
        if (opponent.poison > 0) {
            opponent.health-=opponent.poison
            let message = opponent.name + " took " + opponent.poison + " damage from poison.";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
    }

    const Antidote = (you,opponent) => {
        if (you.poison > 0) {
            let message = you.name + " played antidote, and removed " + you.poison + " poison.";
            you.poison = 0;
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        } else {
            let message = you.name + " played antidote, it tasted like snake oil...";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
    }

    const Shield = (you,opponent) => {
        if (opponent.cardPlayed == 'Goblin') {
            let message = you.name + " played shield, blocked " + opponent.name + "'s goblin and found the time to heal";
            if (you.health <= 8) {
                message += " 2 hp.";
                you.health += 2;
            } else if (you.health == 9) {
                message += " 1 hp.";
                you.health ++;
            }else {
                message += ", but " + you.name + "'s health was already at 10."
            }
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        } else {
            let message = you.name + " hid behind their shield.";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
    }

    const Troll = (you,opponent) => {
        if (opponent.cardPlayed == 'Goblin') {
            let message = you.name + " played troll, it gobbled up " + opponent.name + "'s goblin and smacked " + opponent.name + " with it's club for 5 damage";
            opponent.health-=5;
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        } else {
            let message = you.name + " played troll, but it was hungry so it wandered away.";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
    }

    const Spider = (you,opponent) => {
        if (opponent.cardPlayed == 'Snake') {
            let message = you.name + " played giant spider, it gobbled up " + opponent.name + "'s snake and bit " + opponent.name + " for 5 damage";
            opponent.health-=5;
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        } else {
            let message = you.name + " played giant spider, but it was hungry so it wandered away.";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
    }

    const handleWin = (you,opponent) => {
        if (opponent.health < 1 && you.health < 1) {
            let message = "The game is a tie!";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        } else if (opponent.health < 1) {
            let message = you.name + "is the winner!";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        } else {
            let message = opponent.name + "is the winner!";
            setChat([
                ...chat,
                message
            ])
            socket.emit('chat', chat);
        }
    }

    //handleWin
    //handlePoison
    //handleWin


    return (
        <div style={{overflow: "scroll"}}>
            <ul>
                {
                    chat.map((data, i) =>
                    <li key={i}>
                        {data}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Cards
