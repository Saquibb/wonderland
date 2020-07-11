import React, { useLayoutEffect, useRef } from 'react';
import './App.css';
function App() {

  const aliceSprite = useRef(null);
  const foreground = useRef(null);

  useLayoutEffect(() => {
    // Alice
      var spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }   
      ];

      var alice = aliceSprite.current.animate(
        spriteFrames, {
          easing: 'steps(7, end)',
          direction: "reverse",
          duration: 500,
          playbackRate: 1,
          iterations: Infinity
        });

      setInterval( function() {
        if (alice.playbackRate > .4) {
          alice.playbackRate -= .1;    
        } 
      }, 3000);

    // Scenery
      var sceneryFrames =   [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }   
      ];
      
      var sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
      };
      
      var sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity
      };

      var foregroundMovement = foreground.current.animate(sceneryFrames, sceneryTimingForeground);

      const goFaster = () => {
        alice.playbackRate += 0.1;
      }
  
      window.addEventListener("click", goFaster);
  })

  
  
  return (
    <div className="container">
      <div className="sky"></div>
      
      <div className="earth">
        <div className="alice">
            <img className="alicesprite" ref={aliceSprite} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" />
        </div>
      </div>>
      
      <div className="scenery" id="foreground1" ref={foreground}>
        <img id="treefore" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"/>
      </div>
    </div>
  );
}

export default App;
