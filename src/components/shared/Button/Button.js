import style from './Button.module.scss';

export const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={style.button}>{children}</button>
    );
};