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

    const [ gameStage, setGameStage ] = useState(stages[0].stage);

    return (
        <div className='app'>
            { gameStage === 'start' && <StartScreen /> }
            { gameStage === 'game' && <Game /> }
            { gameStage === 'end' && <GameOver /> }
        </div>
    )
};