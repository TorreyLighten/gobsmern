import React from 'react'

const Cards = (you, opponent) => {
    const [chat, setChat] = useState([]); 

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
        if (opponent.cardPlayed != Spider) {
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
        
    }
    const Troll = (you,opponent) => {
        
    }
    const Spider = (you,opponent) => {
        
    }
    const handleWin = (you,opponent) => {
        
    }

    //handleWin
    //handlePoison
    //handleWin


    return (
        <div>
            
        </div>
    )
}

export default Cards
