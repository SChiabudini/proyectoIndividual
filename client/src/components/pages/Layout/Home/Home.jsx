import Cards from '../Cards/Cards'
import HomeMenu from '../HomeMenu/HomeMenu';
import style from './Home.module.css';


const Home = () => {
    return(
        <div className={style.container}>
            <HomeMenu/>
            <Cards/>
        </div>
    )
}

export default Home;