import React, { useState, useEffect } from 'react'
import io, { Socket } from 'socket.io-client';
import { navigate } from '@reach/router';




const WaitingRoom = () => {
    const [randomString, setRandomString] = useState('');
    const [socket] = useState(() => io(':8000'))
    const randString = () => { 
            var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var string_length = 8;
            var randomstring = '';
            for (var i = 0; i < string_length; i++) {
                var rnum = Math.floor(Math.random() * chars.length);
                randomstring += chars.substring(rnum, rnum + 1);
            }
            setRandomString(randomstring);
            return randomstring;
        }
        
    useEffect(() => {
        let rand = randString()

        socket.on('joined', data => {
            if (data === rand) {
                navigate(`/Game/${rand}/spider`)
            }
        })
        return () => socket.disconnect(true);
    }, [])

    return (
        <div>
            <h2>Link</h2>
            <p>{ randomString }</p>
            <h2>Waiting for Player 2...</h2>
        </div>
    )
}

export default WaitingRoom