import React, { useState, useEffect } from 'react';

function TimerBox() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="box">
      <h1>Timer</h1>
      <p>{time} seconds</p>
      <div className="timer-controls">
     
        {isRunning ? (
          <>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
          </>
        ) : (
          <button onClick={() => setIsRunning(true)}>Start</button>
        )}
        
      </div>
    </div>
  );
}

export default TimerBox;
