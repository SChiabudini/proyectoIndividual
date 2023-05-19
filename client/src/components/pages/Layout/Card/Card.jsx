import styles from './Card.module.css';
import { NavLink } from "react-router-dom";

const Card = ({id, name, continent, flag}) => {
    return (
        <div className={styles.card}>
            <img src={flag} alt={name} />
            <NavLink to={`/detail/${id}`}>{name}</NavLink>
            <h5>{continent}</h5>
        </div>
    )
}

export default Card;