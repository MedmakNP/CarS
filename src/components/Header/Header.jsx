import { useRef } from "react";
import HeaderView from "./HeaderView";


function Header(){
    const ref = useRef(null);
    
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <HeaderView 
        handleClick={handleClick}
        />
    );

};

export default Header;