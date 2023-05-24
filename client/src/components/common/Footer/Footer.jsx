import style from './Footer.module.css';

const Footer = () => {
    return(
        <div className={style.container}>
            <p className={style.p}>
                Desarrollado por <a className={style.a} href="https://www.linkedin.com/in/sofia-chiabudini/" target="_blank" rel="noopener noreferrer">Sofía Chiabudini</a>.
            </p>
        </div>
    )
}

export default Footer;