import React from 'react';
import Logo from './logo.svg';
import './home.css'
const Home = ({onStart,setMinCorrect,minCorrect}) => {
    
    const handleValue = (event) => {
        setMinCorrect(event.target.value);
    };
    
    return (
        <div className='home'>
            <img src={Logo} alt ={Logo}></img>
            <span>ZapRecall</span>
            <input type='number' value={minCorrect} placeholder='Digite sua meta de zaps...' onChange={handleValue}></input>
            <button type='button' disabled={minCorrect < 1 ? true : false} onClick={onStart}>Iniciar Recall!</button>
        </div>
    );
};



export default Home;