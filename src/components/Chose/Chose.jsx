import style from "./chose.module.css"
import book from'../../images/book.png'
import location from'../../images/location.png'
import cust from'../../images/cust.png'
function Chose() {
    return(
        <div className={style.chose}>
            <div className={style.container}>
                <h1> Why Chooes Us? </h1>
                <div className={style.advantagesWrap}>
                    <div className={style.advantage}>
                        <img className={style.img} src={book}  alt="book"/>
                        <h2 >Fast & Easy Booking</h2>
                    </div>
                    <div className={style.advantage}>
                        <img className={style.img} src={location}  alt="location"/>
                        <h2 >Many Pickup Location</h2>
                    </div>
                    <div className={style.advantage}>
                        <img className={style.img} src={cust}  alt="cust"/>
                        <h2 >Satisfied Customer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chose;