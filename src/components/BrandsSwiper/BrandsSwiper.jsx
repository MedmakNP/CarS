import style from './brandsSwiper.module.css'
import brandData from "../../Api/brands"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function BrandsSwiper(){
    return(
        <div className={style.brand}>
            <div className={style.swiperWrap}>
            <Swiper
                    modules={[ Pagination]}
                    slidesPerView={5}
                    pagination={{ clickable: true, }}
                >
                {brandData.map((val) =>(
                    <SwiperSlide >
                        <div className={style.slideWrap}>
                            <img src={val.img} alt='brand'/>
                        </div>
                        <div className={style.pagination}></div>
                    </SwiperSlide>
                ))}    
            </Swiper>
            </div>
        </div>
    );
};

export default BrandsSwiper;