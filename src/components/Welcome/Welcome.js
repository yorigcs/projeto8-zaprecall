import Logo from './logo.svg';
import './welcome.css'
const Welcome = ({onStart}) => {
    return (
        <div className='welcome'>
            <img src={Logo} alt ={Logo}></img>
            <span>ZapRecall</span>
            <button type='button' onClick={onStart}>Iniciar Recall!</button>
        </div>
    );
};



export default Welcome;