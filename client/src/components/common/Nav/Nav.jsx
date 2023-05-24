import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
    return(
        <div>
            <NavLink to="/home" className={style.link}>Home</NavLink>
            <NavLink to="/activities" className={style.link}>Actividades</NavLink>
        </div>
    )
}

export default Nav;