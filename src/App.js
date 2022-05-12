import React from 'react';
import MainHandle from './components/MainRender/MainHandle.js';
import Home from './components/Home/Home.js';

const App =() => {
  const [startGame,setStartGame] = React.useState(false);
  const [minCorrect,setMinCorrect] = React.useState('');
  
  return (
    <>
     {startGame
     ? <MainHandle restartGame={() => setStartGame(false)} minCorrect={minCorrect}/>
     :<Home onStart={() => setStartGame(true)} minCorrect={minCorrect} setMinCorrect={setMinCorrect} />}
    </>
  );
}

export default App;
