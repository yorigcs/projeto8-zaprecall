import React from 'react';
import MainHandle from './components/MainRender/MainHandle.js';
import Home from './components/Home/Home.js';

const App =() => {
  const [startGame,setStartGame] = React.useState(false);
  const [minCorrect,setMinCorrect] = React.useState('');
  const [deck,setDeck] = React.useState('');
  return (
    <>
     {startGame
     ? <MainHandle restartGame={() => setStartGame(false)} minCorrect={minCorrect} questions={deck}/>
     :<Home onStart={() => setStartGame(true)} minCorrect={minCorrect} setMinCorrect={setMinCorrect} setDeck={setDeck} questions={deck} />}
    </>
  );
}

export default App;
