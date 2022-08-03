import { useAppDispatch } from "../../../hooks/hooks";
import { logIn } from "../../../store/reducers/mainSlice";

import Input from "../loginInput/loginInput";


export default function Registration (): JSX.Element {
    const dispatch = useAppDispatch();

    return (
        <>
            <h3>Registration</h3>
            <div>
                <label htmlFor="userLogin">Enter your login</label>
                <Input type="text" id="userLogin" name="userLogin" />
                <label htmlFor="userPassword">Enter your password</label>
                <Input type="password" id="userPassword" name="userPassword" />
            </div>
            <button onClick={() => dispatch(logIn())}>Register</button>
        </>        
    );
}