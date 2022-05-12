import Wrong from './assets/wrong.svg';
import Sad from './assets/sad.svg';
import Happy from './assets/happy.svg';

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

const FooterHandleRestartGame = ({restartGame}) => {

    return (
        <button type='button' onClick={restartGame}>Reiniciar</button>
    );
}

export {FooterHandlerIcon,FooterHandleEndGame,FooterHandleRestartGame};