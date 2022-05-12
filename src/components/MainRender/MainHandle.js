import React from "react";
import { FooterHandlerIcon, FooterHandleEndGame, FooterHandleRestartGame } from "./FooterHandle";
import { Questions, Question } from "./QuestionsHandle";
import Answer from "./AnswerHandle";

import Logo from '../Home/logo.svg';
import './mainHandle.css';




const MainHandle = ({restartGame,questions,minCorrect}) => {
   
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
                ? <FooterHandleEndGame icons={icons} minCorrect={minCorrect}/>
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