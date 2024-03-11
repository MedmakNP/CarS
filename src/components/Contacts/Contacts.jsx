import style from './contacts.module.css';
import logo from '../../images/logo.png';
import telephone from '../../images/telephone.png';
import placeholder from '../../images/placeholder.png';
import mail from '../../images/mail.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';

function Contacts() {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.logoWrap}>
            <img src={logo} className={style.logo} alt="logo" />
            <p className={style.logoTitle}>CarS</p>
          </div>
          <div className={style.inner}>
            <p className={style.text}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
             commonly used to demonstrate the visual form of.
            </p>
          </div>
        </div> 
        <div className={style.wrap}>
          <div className={style.element}>
            <p className={style.title}>Services</p>
            <p className={style.text}>Car Services</p>
            <p className={style.text}>Buy car</p>
            <p className={style.text}>Sell car</p>
            <p className={style.text}>Washing Car</p>
          </div>
          <div className={style.element}>
            <p className={style.title}>COMPANY</p>
            <p className={style.text}>About Us</p>
            <p className={style.text}>Careers</p>
            <p className={style.text}>Press</p>
            <p className={style.text}>Blog</p>
            <p className={style.text}>Sustainability</p>
          </div>
          <div className={style.element}>
            <p className={style.title}>Contact Us</p>
            <p className={style.text}>
              <img src={telephone} className={style.icon} alt="" />
              +91 9979477741
            </p>
            <p className={style.text}>
              <img src={placeholder} className={style.icon} alt="" />
              905-908, Abhijeet-1, Mithakhali Six Roads, Ahmedabad 380006, Gujarat, India
            </p>
            <p className={style.text}>
              <img src={mail} className={style.icon} alt="" />
              tommyshelby156@gmail.com
            </p>
            <div className={style.imgWrap}>
              <img src={twitter} className={style.img} alt="" />
              <img src={linkedin} className={style.img} alt="" />
              <img src={instagram} className={style.img} alt="" />
              <img src={facebook} className={style.img} alt="" /> 
            </div>
          </div>                    
        </div> 
      </div>
    </div>  
  );
}    
export default Contacts;