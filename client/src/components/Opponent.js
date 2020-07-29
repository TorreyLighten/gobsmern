import React from 'react'

import logo from '../pictures/card_back.png';

const Opponent = () => {
    return (
        <div className="container">
            <div name="opponent" className="row">
                    <div style={{display:"inline-block"}}>
                        
                        <div style={{border:"1px solid black", display:"inline-block"}}>
                            <h2>Them</h2>
                            <h2>HP:10</h2>
                            <h2>Poison:0</h2>
                        </div>
                        <div name="opponentSnake" style={{display:"inline-block"}}><img src={logo} alt='image fail'  style={{height:"150px", margin:"10px"}}/></div>
                        <div name="opponentGoblin" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px" , margin:"10px"}}/></div>
                        <div name="opponentShield" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px" , margin:"10px"}}/></div>
                        <div name="opponentAntidote" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px", margin:"10px"}}/></div>
                        <div name="opponentBoss" style={{display:"inline-block"}}><img src={logo} alt='image fail' style={{height:"150px" , margin:"10px"}}/></div>                            
                    </div>
                </div>
        </div>
    )
}

export default Opponent
