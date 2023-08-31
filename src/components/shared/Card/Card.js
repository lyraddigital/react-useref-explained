import style from './Card.module.scss';

export const Card = ({ children, title }) => {
    return (
        <section className={style.card}>
          <header>
            <h2>{ title }</h2>
          </header>
          <div className={style.cardContent}>
           { children }
          </div>
        </section>
    );
};