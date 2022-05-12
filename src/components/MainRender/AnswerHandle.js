import Correct from './assets/correct.svg';
import Maybe from './assets/maybe.svg';
import Wrong from './assets/wrong.svg';

const Answer = ({ answer, setType,setTypeAnswered,setAnswerNum,SetIcons }) => {
    const endQuestion = (newType) => {
        setType('');
        setTypeAnswered(newType);
        setAnswerNum( num => num +1);
        SetIcons(icon => [...icon,newType]);
    };
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

export default Answer;