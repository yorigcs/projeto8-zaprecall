import Logo from './logo.svg';
import './home.css'
const Home = ({onStart}) => {
    return (
        <div className='home'>
            <img src={Logo} alt ={Logo}></img>
            <span>ZapRecall</span>
            <button type='button' onClick={onStart}>Iniciar Recall!</button>
        </div>
    );
};



export default Home;