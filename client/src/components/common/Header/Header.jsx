import Nav from '../Nav/Nav';
import style from './Header.module.css'

const Header = () => {
    return(
        <div className={style.container}>
            <h1>LOGO</h1>
            <p>Lorem ipsum</p>
            <Nav />
        </div>
    )
}

export default Header;