import style from './header.module.css'
import { useContext } from 'react';
import logo from '../../images/logo.png'
import { ThemeContext } from '../../provider/ThemeProvider';

function HeaderView({navigation}){
    const { toggleTheme, type } = useContext(ThemeContext);
    return(
        <div className={style.header}>
            <div className={style.headWrap}>
                    <div className={style.logo}>
                        <img src={logo} alt='logo'/>
                        <p className={style.logoTitle}>CarS</p>
                        <button type='button' className={style.buttonTheme} onClick={toggleTheme}> {type} </button>
                    </div>
                    <div className={style.menu}>
                        <p type = 'button' className={style.text} onClick={() => navigation(0)}>Home</p>
                        <p type = 'button' className={style.text} onClick={() => navigation(1000)}>About Us</p>
                        <p type = 'button' className={style.text} onClick={() => navigation(1800)}>Services</p>
                        <p type = 'button' className={style.text} onClick={() => navigation(2000)}>Stock</p>
                        <p type = 'button' className={style.text} onClick={() => navigation(2500)}>Contact Us</p>
                        <button className={style.button}>Login</button>
                    </div>
            </div>
        </div>
    );
};
export default HeaderView;