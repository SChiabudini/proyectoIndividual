import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/activities">Actividades</NavLink>
        </div>
    )
}

export default Nav;