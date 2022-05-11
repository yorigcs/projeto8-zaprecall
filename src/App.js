import React from 'react';
import RenderQuestions from './components/ShowQuestions/RenderQuestions.js';
import Welcome from './components/Welcome/Welcome.js';

const App =() => {
  const [startQuestions,setStart] = React.useState(false);
  const callQuestions = () => {
    setStart(true);
  }
  return (
    <>
     {startQuestions
     ? <RenderQuestions />
     :<Welcome onStart={callQuestions}/>}
    </>
  );
}

export default App;
