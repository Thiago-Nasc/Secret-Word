// CSS
import './style.css';

interface Props {
    retry: () => void,
    score: number | undefined
}

export const GameOver = ({retry, score}: Props) => {

    return (
        <div className="gameover">

            <h1>Fim de Jogo!</h1>
            <p>Sua pontuação foi: <span className="spots">{score}</span></p>
            <button onClick={retry}>Reiniciar Jogo</button>

        </div>
    )
};