import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import style from './HomeMenu.module.css';

const HomeMenu = () => {

    return (
      <div className={style.container}>
          <div className={style.searchBar}><SearchBar /></div>
          <div className={style.filters}><Filters /></div>
      </div>
   );
}

export default HomeMenu;