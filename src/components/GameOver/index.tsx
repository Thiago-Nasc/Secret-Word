// CSS
import './style.css';

// Types
import { Callback } from '../../Types/Callback';

export const GameOver = ({callback}: Callback) => {

    return (
        <div className="gameover">
        <button onClick={callback}>Reiniciar Jogo</button>
            
        </div>
    )
};