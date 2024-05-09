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
                        <p type = 'button' className={style.text} >Home</p>
                        <p type = 'button' className={style.text} >About Us</p>
                        <p type = 'button' className={style.text} >Services</p>
                        <p type = 'button' className={style.text} >Stock</p>
                        <p type = 'button' className={style.text} >Contact Us</p>
                        <button className={style.button}>Login</button>
                    </div>
            </div>
        </div>
    );
};
export default HeaderView;