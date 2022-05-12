import React from "react";
import { FooterHandlerIcon, FooterHandleEndGame, FooterHandleRestartGame } from "./FooterHandle";
import { Questions, Question } from "./QuestionsHandle";
import Answer from "./AnswerHandle";

import Logo from '../Home/logo.svg';
import './mainHandle.css';

const questions = [
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
    }
];

const shuffle = (array) => {
    for(let i = 0; i<array.length;i++){
        let j = Math.floor(Math.random() * (i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
};

shuffle(questions);

const MainHandle = ({restartGame}) => {
   
    let cnt = 0;
    const [answerNum,setAnswerNum] = React.useState(0);
    const [icons,SetIcons] = React.useState([]);

    return (
        <>
            <header className="title">
                <img src={Logo} alt ={Logo}></img>
                <span>ZapRecall</span>
            </header>
            <main>
                <ul className="main">
                {questions.map( question =>  {
                cnt++; 
                return (
                    <li key={question.id}>
                        <HandleRenders 
                            {...question} 
                            cnt={cnt}
                            setAnswerNum={setAnswerNum}
                            SetIcons={SetIcons}
                        />
                    </li>
                );
                    
                })}
                </ul>
            </main>
            
            <footer className="progress">

                {answerNum === questions.length
                ? <FooterHandleEndGame icons={icons} />
                : <></>}

                <span>{answerNum}/{questions.length} CONCLUÍDOS</span>
                <ul className="icons">
                    {icons.map((icon,i) => (
                        <li key={i}>
                            <FooterHandlerIcon icons={icon}/>
                        </li>
                    ))}
                </ul>

                {answerNum === questions.length
                ? <FooterHandleRestartGame restartGame={restartGame} />
                : <></>}
                
            </footer>

            
      
        </>
        
    )
}


const HandleRenders = ({question,answer,cnt,setAnswerNum,SetIcons}) => {
    const [showType,setType] = React.useState('');
    const [typeAnswered,setTypeAnswered] = React.useState(null);
    switch(showType) {
        case 'showQuestions':
            return (
                <Question 
                question={question}
                setType={setType}
                />
            );
        case 'showAnswers':
            return (
                <Answer 
                answer={answer}
                setType={setType}
                setTypeAnswered={setTypeAnswered}
                setAnswerNum={setAnswerNum}
                SetIcons={SetIcons}
                />
            );
        default:
            return (
                <Questions 
                cnt={cnt}
                setType={setType}
                typeAnswered ={typeAnswered}
                />
            );
    };    
    
};








export default MainHandle;