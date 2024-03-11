import style from './AboutUs.module.css'
import car from '../../images/car.png'

function AboutUs(){
    return(
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.titleWrap}>
                    <h1>About Us</h1>
                    <img className={style.img} src={car} alt='car'/>
                </div>
                <div className={style.textWrap}>
                    <h2>Passionate Team and Exceptional Service</h2>
                    <p className={style.text}> Welcome to CarS, where our love for automobiles meets a commitment to providing an unparalleled customer experience. 
                    Founded with a shared passion for cars, our team is dedicated to bringing you not just vehicles, but an extraordinary journey into the world of automotive excellence.
                    Since our establishment, we have been at the forefront of the industry, setting new standards for quality,
                    innovation, and customer satisfaction.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;