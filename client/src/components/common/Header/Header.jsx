import Nav from '../Nav/Nav';
import style from './Header.module.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}><img src={logo} alt="Country App"/></h1>
      <p className={style.p}>Una app de países</p>
      <Nav className={style.nav} />
    </div>
  );
};

export default Header;