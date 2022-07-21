// CSS
import './style.css';

// Types
import { Callback } from '../../Types/Callback';

interface Props {
    callback: Callback
}

export const GameOver = ({callback}: Props) => {

    return (
        <div className="gameover">
        <button onClick={callback}>Reiniciar Jogo</button>
            
        </div>
    )
};