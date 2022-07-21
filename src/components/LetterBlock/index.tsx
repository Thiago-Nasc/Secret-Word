import './style.css';

interface Props {
    letter?: string | undefined
}

export const LetterBlock = ({letter}: Props) => {

    return (
        <div className='block'>
            {letter}
        </div>
    )
};