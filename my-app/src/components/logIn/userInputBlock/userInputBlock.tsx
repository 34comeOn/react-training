import { useState } from "react";

import { useAppDispatch } from "../../../hooks/hooks";
import { logIn } from "../../../store/reducers/mainSlice";


import { InputClassComponent } from "../loginInput/loginInput";

import { UserInputBlockTyping } from "../../../types/userInputBlockTyping";


export default function UserInputBlock ({buttonName}: UserInputBlockTyping): JSX.Element {
    const dispatch = useAppDispatch();

    const setUserDataToLocStorage = (userLogin: string, userPassword: string): void => {
        localStorage.setItem(userLogin, userPassword);
    }

    const checkDataFromLocalStorage = (userLogin: string, userPassword: string): void => {
       if (localStorage.getItem(userLogin) === userPassword) {
        dispatch(logIn(userLogin));
       } else { 
        alert("login and password does not match");
       }
    }
    
    const [LoginState, setLoginState] = useState('');
    const [PasswordState, setPasswordState] = useState('');
    

    const handleLoginChange = (state: string) => {
        setLoginState(state);
    } 

    const handlePasswordChange = (state: string) => {
        setPasswordState(state);
    } 

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", width: "200px"}}>
                <label htmlFor="userLogin"><b>Enter your login</b></label>
                <InputClassComponent type="text" id="userLogin" name="userLogin"
                onInputChange={handleLoginChange} inputState={LoginState}/>
                <label htmlFor="userPassword"><b>Enter your password</b></label>
                <InputClassComponent type="password" id="userPassword" name="userPassword" 
                onInputChange={handlePasswordChange} inputState={PasswordState}/>
            </div>
            <button onClick={() => {
                (buttonName === "Sign-in")? checkDataFromLocalStorage(LoginState, PasswordState) :
                setUserDataToLocStorage(LoginState, PasswordState);
            }}>{buttonName}</button>
        </>        
    );
}