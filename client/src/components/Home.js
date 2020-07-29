import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router'
import logo from '../pictures/card_back.png';
import troll from '../pictures/troll.png';
import spider from '../pictures/spider.png';
import '../App.css';
import io from 'socket.io-client';

const Home = () => {
    const [link, setLink] = useState("")
    const [socket] = useState(() => io(':8000'))
    const [card, setCard] = useState(logo)

    const changeHandler = e => {
        e.preventDefault();
        const curLink = e.target.value;
        setLink(curLink);
        console.log(curLink);
    }

    const submitHandler = (e, player) => {
        e.preventDefault();
        console.log(player);
        if (player == "player2") {
            //let player1 know to go to /Game
            socket.emit('joined', link);
            console.log('joining?')
            navigate(`/Game/${link}`)
        } else {
            navigate("/watchGame")
        }
    }

    


    return (
        <div>
            <header className="App-header">
                <h1>Snakes & Goblins</h1>
                <img src={card} className="App-logo" alt="logo" />
                <Link onMouseOver={e=>setCard(spider)} onMouseOut={e=>setCard(logo)} to="/waiting">Start as Giant Spider</Link>
                <form onMouseOver={e=>setCard(troll)} onMouseOut={e=>setCard(logo)} onSubmit={e => submitHandler(e, "player2") }>
                    <label className="text-primary" htmlFor="link">Join as Troll </label> &nbsp;
                    <input onChange={changeHandler } type="text" className="link" /> &nbsp;
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <form onSubmit={e => submitHandler(e, "watcher") }>
                    <label className="text-primary" htmlFor="watchlink">Watch Game </label> &nbsp;
                    <input onChange={changeHandler} type="text" className="watchlink" /> &nbsp;
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </header>
        </div>
    )
}

export default Home
