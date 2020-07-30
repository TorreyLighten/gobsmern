import React, {useState, useEffect} from 'react';

import io, { Socket } from 'socket.io-client';

import logo from '../pictures/card_back_red.png';

const Opponent = (props) => {
    const {boss, opponent}=props
    const [socket] = useState(() => io(':8000'))
    return (
        <div className="container">
            <div name="opponent" className="row">
                    <div style={{border:"1px solid black", display:"inline-block", margin:"20px", marginRight:"80px"}}>
                        <h2>{opponent.name}</h2>
                        <h2>HP:{opponent.health}</h2>
                        <h2>Poison:{opponent.poison}</h2>
                    </div>
                    <div style={{display:"inline-block"}}>
                        
                        <div name="opponentSnake" style={{display:"inline-block"}}><img src={logo} alt='image fail'  style={{height:"150px", margin:"10px"}}/></div>
                        <div name="opponentGoblin" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px" , margin:"10px"}}/></div>
                        <div name="opponentShield" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px" , margin:"10px"}}/></div>
                        <div name="opponentAntidote" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px", margin:"10px"}}/></div>
                        <div name="opponentBoss" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px" , margin:"10px"}}/></div>                            
                    </div>
                    <div style={{display:"inline-block"}}>
                        <h2>Last Played Card</h2>
                        <div>
                            <img src={logo} alt="image fail" style={{height:"150px", margin:"10px", border:"2px solid black"}}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Opponent
