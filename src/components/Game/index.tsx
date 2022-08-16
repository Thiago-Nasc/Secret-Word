// Components
import { LetterBlock } from '../../components/LetterBlock';

// CSS
import './style.css';

// Types
import { Callback } from '../../Types/Callback';

// Hooks
import React, { useState, useRef } from 'react';

// tipando propriedades recebidas
interface Props {
    verifyLetter: (leter: string) => void,
    wordLetters: string[] | undefined,
    tip: string | undefined,
    corretLetters: string[] | undefined,
    wrongLetters: string[] | undefined,
    attempts: number,
    score: number
}

export const Game = ({verifyLetter, wordLetters, tip, corretLetters, wrongLetters, attempts, score}: Props) => {

    const [ letter, setLetter ] = useState<string>('');
    const inputLetter = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        verifyLetter(letter.toUpperCase());
        setLetter('');
        inputLetter.current!.focus();

    };

    return (
        <div className="game">
            <h2 className="points">Pontuação: {score}</h2>
            <div className="areaGame">
                <div className="areaLetterBlock">
                    {
                    wordLetters?.map((item, key) => corretLetters?.includes(item) ? (
                        <LetterBlock letter={item} key={key} />
                    ) : (
                        <LetterBlock key={key}/>
                    ))
                    }
                    
                </div>
            <div className="tip">{tip}</div>
            <div className="attempts"> Você ainda tem <span className="attempt">{attempts}</span> tentativa(s)</div>
            </div>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className="title-input">Digite uma letra</span>
                        <input
                            type="text"
                            required maxLength={1}
                            onChange={ (e) => setLetter(e.target.value)}
                            value={letter}
                            ref={inputLetter}
                            />
                        <button>Jogar!</button>
                    </label>
                </form>
                <div className="wrongLetters">
                    <h3>Letras utilizadas:</h3>
                    {wrongLetters!.map((item, key) => <span className="letter" key={key}>{item}</span>)}
                </div>
            </div>
        </div>
    )
};