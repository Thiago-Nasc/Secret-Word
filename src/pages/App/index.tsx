// Comoponetns
import { StartScreen } from '../../components/StartScreen';
import { Game } from '../../components/Game';
import { GameOver } from '../../components/GameOver';

// CSS
import './style.css';

// Hooks
import { useEffect, useState } from 'react';

// Data
import { wordsObject } from '../../data/words';


export const App = () => {

    const stages = [
        {id: 1, stage: 'start'},
        {id: 2, stage: 'game'},
        {id: 3, stage: 'end'}
    ];

    // quantidade de tentativas do jogo
    const attemptsQts = 3;

    // States
    const [ gameStage, setGameStage ] = useState(stages[0].stage);
    const [ wordsList, setWords ] = useState(wordsObject);
    const [ randomCategory, setRandomCategory ] = useState<string>('');
    const [ letters, setLetters ] = useState<string[]>([]);
    const [ corretLetters, setCorretLetters ] = useState<string[]>([]);
    const [ wrongLetters, setWrongLetters ] = useState<string[]>([]);
    const [ attempts, setAttempts ] = useState(attemptsQts);
    const [ score, setScore ] = useState(0);

    // Gerar gategorias e palavras aleatória
    const randomCategoryAndWord = () => {

        // gerando categoria aleatória
        const categories = Object.keys(wordsList);
        const randomKeyCategory = Math.floor( Math.random() * categories.length );
        const category = categories[randomKeyCategory];

        // gerando palavra aleatória
        const words = wordsObject[category as keyof typeof wordsObject];
        const randomKeyWord = Math.floor( Math.random() * words.length );
        const word = words[randomKeyWord].toUpperCase();

        // retornando valores
        return [category, word];
    };


    // Iniciar o jogo
    const startGame = () => {

        // Recenbendo valores
        const [category, word] = randomCategoryAndWord();

        // seprando a palavra em letras
        const wordLetters = word.split('');

        // setando valores
        setRandomCategory(category);
        setLetters(wordLetters);
        
        // setando stágio
        setGameStage(stages[1].stage);
    };

    // Verificar letra
    const verifyLetter = (letter: string) => {
        // checando se a letra já foi digitada antes
        if (corretLetters.includes(letter) || wrongLetters.includes(letter)) {
            return;
        }

        // validando erro ou acerto do usuário
        if(letters.includes(letter)) {
            // acerto
            setCorretLetters((prevState) => [
                ...prevState,
                letter
            ]);
        } else {
            //erro
            setWrongLetters((prevState) => [
                ...prevState,
                letter
            ]);

            setAttempts(prevState => prevState - 1);
        }
    };

    // Reiniciar jogo
    const retryGame = () => {
        setScore(0);
        setAttempts(attemptsQts);

        setGameStage(stages[0].stage);
    };

    const clearLetterStates = () => {
        setCorretLetters([]);
        setWrongLetters([]);
    };

    // monitoramento das tentativas do usuário
    useEffect(() => {
        if (attempts <= 0) {
            // resentando os states de letras
            clearLetterStates();

            //mudando o stágio para game over
            setGameStage(stages[2].stage);
        }
    }, [attempts]);

    // monitamento da vitória do usuário
    useEffect(() => {
        if (letters.length > 0 && letters.every((item) => corretLetters.includes(item))) {

            // alterando score
            setScore(prevState => prevState + 150);

            clearLetterStates();
            startGame();
        }
    }, [corretLetters]);

    return (
        <div className='app'>

            { gameStage === 'start' && <StartScreen callback={startGame} /> }

            {
            gameStage === 'game' && <Game
                verifyLetter={verifyLetter}
                wordLetters={letters}
                tip={randomCategory}
                corretLetters={corretLetters}
                wrongLetters={wrongLetters}
                attempts={attempts}
                score={score}
            />
            };

            { gameStage === 'end' && <GameOver retry={retryGame} score={score} /> }

        </div>
    );
};