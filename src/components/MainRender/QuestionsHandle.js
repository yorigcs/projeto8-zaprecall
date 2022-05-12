import Click from './assets/click.svg';
import Setinha from './assets/setinha.svg';

const Questions = ({typeAnswered,setType,cnt}) => {
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
        <img src={Click} alt={Click} onClick={() => setType('showQuestions')}></img>
    </div>
    );
}

const Question = ({ question, setType }) => {
    return (
        <div className="showQuestion">
            <span>{question}</span>
            <img src={Setinha} alt={Setinha} onClick={() => setType('showAnswers')}></img>
        </div>
    );
};

export {Questions, Question};