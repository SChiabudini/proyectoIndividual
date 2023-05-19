import { NavLink } from 'react-router-dom';
import style from './Landing.module.css'

const Landing = () => {

    return(
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.h1}>COUNTRIES APP</h1>
                <p className={style.p}>Ingresá para ver un listado completo de los países del mundo, sus características y actividades que podrás realizar en ellos.</p>
                <NavLink to="/home" className={style.link}>Entrar</NavLink>
            </div>
        </div>
    )
}

export default Landing;