import Correct from './assets/correct.svg';
import Maybe from './assets/maybe.svg';
import Sad from './assets/sad.svg';
import Happy from './assets/happy.svg';

const FooterHandlerIcon = ({icons}) => (
    <img src={icons} alt={icons}></img>
);

const FooterHandleEndGame = ({icons,minCorrect}) => {
    const isValid = icons.filter( icon => (icon === Correct || icon === Maybe)).length >= minCorrect;
    console.log(isValid);

    if(!isValid) {
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

const FooterHandleRestartGame = ({restartGame}) => {

    return (
        <button type='button' onClick={restartGame}>REINICIAR RECALL</button>
    );
}

export {FooterHandlerIcon,FooterHandleEndGame,FooterHandleRestartGame};