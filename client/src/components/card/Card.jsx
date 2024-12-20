import styles from './Card.module.css'



const Card = (props) => {

    console.log(props);

    return ( 
    <div className={styles.card}>
        <a href='#!' className={styles.card__link}></a>
        <img 
            className={styles.card__img} 
            src={props.img} 
            alt='bestOne' 
        />
        <div className={styles.card__body}>
            <div className={styles.card__text}>
                <div className={styles.card__title}>{props.title}</div>
                <div className={styles.card__desc}>{props.desc}</div>
            </div>
            <div className={styles.card__cost}>
                180$
            </div>
        </div>
    </div> );
    
}
 
export default Card;