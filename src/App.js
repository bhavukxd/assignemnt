import React from 'react';
import './App.css';
import Header from './components/Header';
import CounterBox from './components/CounterBox';
import TimerBox from './components/TimerBox';
import ThemeBox from './components/ThemeBox';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <CounterBox />
        <TimerBox />
        <ThemeBox />
      </div>
    </div>
  );
}

export default App;
