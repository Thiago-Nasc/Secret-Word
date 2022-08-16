// CSS
import './style.css';

// Types
import { Callback } from '../../Types/Callback';

// componente de exibição inicial da aplicação

interface Props {
    callback: Callback;
}

export const StartScreen = ({callback}: Props) => {

    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para iniciar o jogo</p>
            <button onClick={callback}>Iniciar o Jogo</button>
        </div>
    )
};