import Search from '../Search/Search';
import style from './intro.module.css'

function Intro(){
    return(
        <div className={style.intro}>
            <div className={style.overlay}></div>
            <div className={style.wrap}>
                <p className={style.title}>Find Your Dream Car</p>
                <p className={style.text}>Explore a world of luxury and performance as you embark on a journey to discover your perfect car. 
                                          Whether it's the sleek lines of a sports car or the comfort of a luxury sedan, your dream car awaits. 
                                          Immerse yourself in the thrill of choice, and let us guide you towards automotive excellence</p>
                <button className={style.btn}>Book Now</button>
                <Search />
            </div>
        </div>
    );
};

export default Intro;