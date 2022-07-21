import './style.css';

// componente de exibição inicial da aplicação
export const StartScreen = () => {

    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para iniciar o jogo</p>
            <button>Iniciar o Jogo</button>
        </div>
    )
};