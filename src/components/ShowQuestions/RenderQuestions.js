import React from "react";
import Logo from '../Welcome/logo.svg';
import Click from './click.svg';
import Setinha from './setinha.svg';
import Correct from './correct.svg';
import Maybe from './maybe.svg';
import Wrong from './wrong.svg';
import Sad from './sad.svg';
import Happy from './happy.svg';
import './renderQuestions.css';
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

const RenderQuestions = () => {
   
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
                            onChangeAnswerNum={setAnswerNum}
                            answerNum={answerNum}
                            icons={icons}
                            onChangeIcons={SetIcons}
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

                
                
            </footer>

            
      
        </>
        
    )
}

const FooterHandlerIcon = ({icons}) => (
    <img src={icons} alt={icons}></img>
);

const FooterHandleEndGame = ({icons}) => {
    if(icons.includes(Wrong)) {
        return (
            <div className="result">
                <div>
                    <img src={Sad} alt={Sad}></img>
                    <span>Putz...</span>
                </div>
                <span>Ainda faltam alguns...Mas não desanime!</span>
            </div>
        );
    }
    return (
        <div className="result">
            <div>
                <img src={Happy} alt={Happy}></img>
                <span>Parábens!</span>
            </div>
            <span>Você não esqueceu de nenhum flashcard!</span>
        </div>
    );

};

    

const HandleRenders = ({question,answer,cnt,answerNum,onChangeAnswerNum,icons,onChangeIcons}) => {
    const [showType,setType] = React.useState('');
    const [typeAnswered,setTypeAnswered] = React.useState(null);
    switch(showType) {
        case 'showQuestions':
            return (
                <Question 
                question={question}
                onChangeType={setType}
                />
            );
        case 'showAnswers':
            return (
                <Answer 
                answer={answer}
                onChangeType={setType}
                onChangeTypeAnswered={setTypeAnswered}
                onChangeAnswerNum={onChangeAnswerNum}
                answerNum={answerNum}
                icons={icons}
                onChangeIcons={onChangeIcons}
                />
            );
        default:
            return (
                <Questions 
                cnt={cnt}
                onChangeType={setType}
                typeAnswered ={typeAnswered}
                />
            );
    };    
    
};

const Questions = ({typeAnswered,onChangeType,cnt}) => {
    if(typeAnswered) {
        return (
            <div className="question">
                <span className="aswered">Pergunta {cnt}</span>
                <img src={typeAnswered} alt={typeAnswered}></img>
            </div>
        );
    }
    return (
    <div className="question">
        <span>Pergunta {cnt}</span>
        <img src={Click} alt={Click} onClick={() => onChangeType('showQuestions')}></img>
    </div>
    );
}

const Question = ({ question, onChangeType }) => {
    return (
        <div className="showQuestion">
            <span>{question}</span>
            <img src={Setinha} alt={Setinha} onClick={() => onChangeType('showAnswers')}></img>
        </div>
    );
};


const Answer = ({ answer, onChangeType,onChangeTypeAnswered,answerNum,onChangeAnswerNum,icons,onChangeIcons }) => {
    const endQuestion = (newType) => {
        onChangeType('');
        onChangeTypeAnswered(newType);
        onChangeAnswerNum(answerNum +1);
        onChangeIcons([...icons,newType]);
    }
    return (
        <div className="showAnswers">
            <span>{answer}</span>
            <div className="options">
                <button type="button" onClick={() => endQuestion(Wrong)}>Não lembrei</button>
                <button type="button" onClick={() => endQuestion(Maybe)} >Quase não lembrei</button>
                <button type="button" onClick={() => endQuestion(Correct)}>Zap!</button>
            </div>
        </div>
    );
};



export default RenderQuestions;