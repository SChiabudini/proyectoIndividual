import { NavLink } from "react-router-dom";

const Card = ({id, name, continent, flag}) => {
    return (
        <div>
            <img src={flag} alt={name} />
            <NavLink to={`/detail/${id}`}>{name}</NavLink>
            <h5>{continent}</h5>
        </div>
    )
}

export default Card;