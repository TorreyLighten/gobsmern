import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import io from 'socket.io-client';
import { Router } from '@reach/router'
import WaitingRoom from './components/WaitingRoom';
import Game from './components/Game';

function App() {
  const [socket] = useState(() => io(':8000'))

  useEffect(() => {
    socket.on('message_from_server', data => {
      console.log(data);
    });

    return () => socket.disconnect(true);
  }, [])


  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <WaitingRoom path="/waiting" />
        <Game path="/Game/:link/:boss" />
      </Router>
    </div>
  );
}

export default App;
