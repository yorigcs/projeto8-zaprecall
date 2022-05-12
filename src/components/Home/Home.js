import React from 'react';
import Logo from './logo.svg';
import './home.css'


const questionsReact = [
    {
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript',
        id: 0
    },
    {
        question: ' O React é:',
        answer: 'Uma biblioteca JavaScript para construção de interfaces',
        id: 1
    },
    {
        question: ' Componentes devem iniciar com:',
        answer: 'letra maiúscula',
        id: 2
    },
    {
        question: ' Usamos o npm para:',
        answer: 'gerenciar os pacotes necessários e suas dependências',
        id: 3
    }
];

const questionsATG = [
    {
        question: 'Qual a melhor novel?',
        answer: 'Against the gods',
        id: 0
    },
    {
        question: 'A obra está atualmente em qual volume?',
        answer: 'Volume 19 - Ancient Abyss',
        id: 1
    },
    {
        question: 'Qual o nome do protagonista?',
        answer: 'Yun Che',
        id: 2
    },
    {
        question: 'Qual o título da Chi Wuyao?',
        answer: 'Rainha da região norte',
        id: 3
    }
];

const shuffle = (array) => {
    for(let i = 0; i<array.length;i++){
        let j = Math.floor(Math.random() * (i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
};


const Home = ({onStart,setMinCorrect,minCorrect,setDeck}) => {
    
    const handleValueZaps = (event) => {
        setMinCorrect(event.target.value);
        
    };

    const handleValueDeck = (event) => {
        if(event.target.value === 'questionsReact') {
            shuffle(questionsReact);
            setDeck(questionsReact);
        } else if(event.target.value === 'questionsATG') {
            shuffle(questionsATG);
            setDeck(questionsATG);
        }
        

    };
    
    return (
        <div className='home'>
            <img src={Logo} alt ={Logo}></img>
            <span>ZapRecall</span>
            <select id="cars" name="cars">
                <option selected disabled>Escolha seu deck</option>
                <option onClick={handleValueDeck} value="questionsReact">React</option>
                <option onClick={handleValueDeck} value="questionsATG">Against the Gods</option>
            </select>
            
            <input type='number' value={minCorrect} placeholder='Digite sua meta de zaps...' onChange={handleValueZaps}></input>
            <button type='button' disabled={minCorrect < 1 ? true : false} onClick={onStart}>Iniciar Recall!</button>
        </div>
    );
};



export default Home;