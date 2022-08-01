import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { logIn } from "../../store/reducers/mainSlice";


export default function Registration (): JSX.Element {
    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useAppDispatch();

    console.log(useAppSelector(state => state.main.userStatus))

    return (
        <>
            <h3>Registration</h3>
            <div>
                <label htmlFor="userLogin">Enter your login</label>
                <input type="text" id="userLogin" name="userLogin" onChange={(event) => setUserLogin(event.target.value)} value={userLogin}/>
                <label htmlFor="userPassword">Enter your password</label>
                <input type="password" id="userPassword" name="userPassword" onChange={(event) => setUserPassword(event.target.value)} value={userPassword}/>
            </div>
            <button onClick={() => dispatch(logIn())}>Register</button>
        </>        
    );
}