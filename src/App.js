import React from 'react';
import MainHandle from './components/MainRender/MainHandle.js';
import Home from './components/Home/Home.js';

const App =() => {
  const [startGame,setStartGame] = React.useState(false);
  
  return (
    <>
     {startGame
     ? <MainHandle restartGame={() => setStartGame(false)}/>
     :<Home onStart={() => setStartGame(true)}/>}
    </>
  );
}

export default App;
