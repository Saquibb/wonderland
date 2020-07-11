import React, { useLayoutEffect, useRef } from 'react';
import './App.css';
function App() {

  const aliceSprite = useRef(null);

  useLayoutEffect(() => {
    var spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }   
    ];

    aliceSprite.current.animate(
      spriteFrames, {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 500,
        playbackRate: 1,
        iterations: Infinity
      });
  })
  
  return (
    <div className="container">
      <div className="sky"></div>
      <div className="earth">
        <div className="alice">
            <img className="alicesprite" ref={aliceSprite} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" />
        </div>
      </div>>
    </div>
  );
}

export default App;
