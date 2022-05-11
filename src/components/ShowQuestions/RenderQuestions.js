import React from "react";
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
];

const RenderQuestions = () => {
    return (
        <ul>
            {questions.map( question =>  (
                <li key={question.id}>
                    <Questions {...question}/>
                </li>
                
            ))}
        </ul>
    )
}

const Questions = ({question,answer,id}) => {
    const [showQuestion,setQuestion] = React.useState(false);
    return(
        <>
        {showQuestion
        ? <span>{question}</span>
        : <span onClick={()=> setQuestion(true)}>Pergunta {id+1}</span>}
        </>
    );
    
        
    
};
export default RenderQuestions;