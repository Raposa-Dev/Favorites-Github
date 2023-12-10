import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles";

export default function App(){

    return (
        <HeaderStyle> 
            <h2>Git To-Do</h2>      
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/Salved"}>Save</Link>  
            </nav> 
        </HeaderStyle>
    );
};