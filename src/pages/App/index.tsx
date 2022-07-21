// Comoponetns
import { StartScreen } from '../../components/StartScreen';
import { Game } from '../../components/Game';
import { GameOver } from '../../components/GameOver';

// CSS
import './style.css';

// Hooks
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from '../../data/words';


export const App = () => {

    const stages = [
        {id: 1, stage: 'start'},
        {id: 2, stage: 'game'},
        {id: 3, stage: 'end'}
    ];

    // States
    const [ gameStage, setGameStage ] = useState(stages[0].stage);
    const [ word, setWord ] = useState(wordsList);

    // Iniciar o jogo
    const startGame = () => setGameStage(stages[1].stage);

    // Verificar letra
    const verifyLetter = () => setGameStage(stages[2].stage);

    // Reiniciar jogo
    const retryGame = () => setGameStage(stages[0].stage);

    return (
        <div className='app'>
            { gameStage === 'start' && <StartScreen callback={startGame} /> }
            { gameStage === 'game' && <Game callback={verifyLetter} /> }
            { gameStage === 'end' && <GameOver callback={retryGame} /> }
        </div>
    )
};