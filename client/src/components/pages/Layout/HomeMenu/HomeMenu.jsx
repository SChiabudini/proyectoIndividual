import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import style from './HomeMenu.module.css';

const HomeMenu = () => {

    return (
      <div className={style.container}>
        <SearchBar className={style.searchBar}/>
        <Filters className={style.filters}/>
      </div>
   );
}

export default HomeMenu;