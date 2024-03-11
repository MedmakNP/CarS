import style from './search.module.css'

function Search(){
    return(
        <div className={style.search}>
            <div className={style.bodySearch}>
                <div className={style.select}>
                    <select className={style.customSelect}>
                        <option value='0'>Location</option>
                        <option value='1'>Location</option>
                    </select>
                </div>
                <div className={style.select}>
                    <select className={style.customSelect}>
                        <option value='0'>Brand Name</option>
                        <option value='1'>Brand Name</option>
                    </select>
                </div>
                <div className={style.select}>
                    <select className={style.customSelect}>
                        <option value='0'>Select Type</option>
                        <option value='1'>Select Type</option>
                    </select>
                </div>
                <div className={style.select}>
                    <select className={style.customSelect}>
                        <option value='0'>Select Models</option>
                        <option value='1'>Select Models</option>
                    </select>
                </div>
                <button className={style.btn}>Search now</button>
            </div>
        </div>
    );
};

export default Search;