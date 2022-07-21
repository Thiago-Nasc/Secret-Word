// CSS
import './style.css';

// Types
import { Callback } from '../../Types/Callback';

export const Game = ({callback}: Callback) => {

    return (
        <div className="game">
        <button onClick={callback}>GameOver</button>
            
        </div>
    )
};