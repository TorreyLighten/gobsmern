import React, {useState, useEffect} from 'react'

import logo from '../pictures/card_back_green.png';
import troll from '../pictures/Boss_troll.png';
import spider from '../pictures/Boss_giant_spider.png';
import antidote1 from '../pictures/antidote1.png'
import goblins1 from '../pictures/goblins1.png'
import shield1 from '../pictures/shield1.png'
import snakes1 from '../pictures/snakes1.png'
import io, { Socket } from 'socket.io-client';

const You = (props) => {
    
    // const [socket] = useState(() => io(':8000'))
    const {boss, you, socket}=props
    
    
    const clickHandler=(e)=>{
        socket.emit(`${boss}CP`, e.target.name)
    }
    
    
    
    return (
        <div className="container">
                
                <div name="you" className="row" style={{display:"inline-block"}}>
                    <div style={{border:"1px solid black", display:"inline-block", margin:"20px", marginRight:"80px"}}>
                        <h2>{you.name}</h2>
                        <h2>HP:{you.health}</h2>
                        <h2>Poison:{you.poison}</h2>
                    </div>
                    <div style={{display:"inline-block"}}>
                        
                        <div style={{display:"inline-block"}}><img name="Snake" onClick={clickHandler} src={snakes1} alt='image fail'  style={{height:"150px", margin:"10px", border:"2px solid black"}}/></div>
                        <div style={{display:"inline-block"}}><img name="Goblin" onClick={clickHandler} src={goblins1} alt='image fail'  style={{height:"150px", margin:"10px",border:"2px solid black"}}/></div>
                        <div style={{display:"inline-block"}}><img name="Shield" onClick={clickHandler} src={shield1} alt='image fail'  style={{height:"150px", margin:"10px",border:"2px solid black"}}/></div>
                        <div style={{display:"inline-block"}}><img name="Antidote" onClick={clickHandler} src={antidote1} alt='image fail'  style={{height:"150px", margin:"10px",border:"2px solid black"}}/></div>
                       
                        
                      
                        <div onClick={clickHandler} style={{display:"inline-block"}}>
                            {
                                boss=='troll' ?
                                <img name="Troll" src={troll} style={{height:"150px", display:"inline-block"}}/>
                                :
                                <img name="Spider" src={spider} style={{height:"150px", display:"inline-block"}}/>
                            }
                        </div>
                             
                              
                        {/* <div className="box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div  className="content" name="youBoss"  style={{display:"inline-block"}}>    
                            </div>
                        </div> */}
                        
                           
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

export default You

