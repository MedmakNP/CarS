import style from "./stock.module.css"
import carsData from "../../Api/cars"; 
import people from '../../images/people.png'
import fuel from '../../images/fuel.png'
import engine from '../../images/engine.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Stock(){
    return(
        <div className={style.stock}>
            <div className={style.container}>
                <h1>Available Cars</h1>
                <div className={style.swiperWrap}>
                <Swiper
                    modules={[ Pagination]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true}}
                    className={style.customSwiper}
                >   
                    {carsData.map((val) =>(
                        <SwiperSlide>
                                <div className={style.elemInner}>
                                    <img className={style.imgCar} src={val.img} alt="car"/>
                                    <h2 className={style.name}>{val.name}</h2>
                                    <div className={style.specWrap}>
                                        <div className={style.wrapper}>
                                            <img className={style.img} src={people} alt="people"/>
                                            <p>{val.people}</p>
                                        </div>
                                        <div className={style.wrapper}>
                                            <img className={style.img} src={fuel} alt="fuel"/>
                                            <p>{val.fuel}</p>
                                        </div>
                                        <div className={style.wrapper}>
                                            <img className={style.img} src={engine} alt="engine"/>
                                            <p>{val.engine}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.cost}>
                                    <h2 className={style.text}>{val.cost}</h2>    
                                </div> 
                                <div className={style.pagination}></div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Stock;
