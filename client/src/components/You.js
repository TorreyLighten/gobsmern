import React from 'react'

import logo from '../pictures/card_back.png';
import troll from '../pictures/Boss_troll.png';
import spider from '../pictures/Boss_giant_spider.png';

const You = () => {
    return (
        <div className="container">
                <div name="you" className="row" style={{display:"inline-block"}}>
                    <div>
                        <div style={{border:"1px solid black", display:"inline-block"}}>
                            <h2>You</h2>
                            <h2>HP:10</h2>
                            <h2>Poison:0</h2>
                        </div>
                        <div name="youSnake"  style={{display:"inline-block"}}><img src={logo} alt='image fail'  style={{height:"150px", margin:"10px"}}/></div>
                        <div name="youGoblin" style={{display:"inline-block"}}><img src={logo} alt='image fail'  style={{height:"150px", margin:"10px"}}/></div>
                        <div name="youShield" style={{display:"inline-block"}}><img src={logo} alt='image fail'  style={{height:"150px", margin:"10px"}}/></div>
                        <div name="youAntidote" style={{display:"inline-block"}}><img src={logo} alt='image fail'  style={{height:"150px", margin:"10px"}}/></div>
                        <div name="youBoss" style={{display:"inline-block"}}><img src={logo} alt='image fail'  style={{height:"150px", margin:"10px"}}/></div>                            
                    </div>
                </div>
        </div>
    )
}

export default You

