import React from 'react'

import oppCard from '../pictures/card_back_red.png';
import youCard from '../pictures/card_back_green.png';
import logo from '../pictures/card_back.png';
import troll from '../pictures/Boss_troll.png';
import spider from '../pictures/Boss_giant_spider.png';
import antidote1 from '../pictures/antidote1.png'
import antidote2 from '../pictures/antidote2.png'
import goblins1 from '../pictures/goblins1.png'
import goblins2 from '../pictures/goblins2.png'
import shield1 from '../pictures/shield1.png'
import shield2 from '../pictures/shield2.png'
import snakes1 from '../pictures/snakes1.png'
import snakes2 from '../pictures/snakes2.png'
import Cards from './Cards';

const PlayArea = (props) => {
    const {audience, you, opponent}=props
    return (
        <div style={{left: "0px"}}>
            <div style={{display: "inline-block", left: "0px"}}>
                <Cards you={ you } opponent={ opponent } />
            </div>
            <div style={{display: "inline-block", marginLeft: "350px", marginRight: "450px"}}>
            {
                audience==true ?
                <div>
                    <div style={{display:"inline-block"}}>
                        <img src={logo} alt='image fail' style={{height:"150px", margin:"10px", border:"2px solid black"}} />
                    </div>
                    <div style={{display:"inline-block"}}>
                        <img src={logo} alt='image fail' style={{height:"150px", margin:"10px", border:"2px solid black"}} />
                    </div>
                </div>
                :
                <div>
                    <div style={{display:"inline-block"}}>
                        <img src={oppCard} alt='image fail' style={{height:"150px", margin:"10px", border:"2px solid black"}} />
                    </div>
                    <div style={{display:"inline-block"}}>
                        <img src={youCard} alt='image fail' style={{height:"150px", margin:"10px", border:"2px solid black"}} />
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default PlayArea
