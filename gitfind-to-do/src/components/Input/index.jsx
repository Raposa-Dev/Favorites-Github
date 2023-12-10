import { InputStyle } from "./style";
export default function InputComponent({ user, SetUser }) {
    
    return(
        <div>
            <InputStyle 
                type="text" 
                placeholder="@USER"
                value={user}
                onChange={ event => SetUser( event.target.value ) } 
            />
        </div>
    );
};