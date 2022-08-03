import { useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { logIn } from "../../../store/reducers/mainSlice";

import Input from "../loginInput/loginInput";
import { InputClass } from "../loginInput/loginInput";

// export default function SignIn (): JSX.Element {
//     const dispatch = useAppDispatch();

//     const setUserDataToLocStorage = (userLogin: string, userPassword: string): void => {
//         localStorage.setItem('userLogin', userLogin);
//         localStorage.setItem('userPassword', userPassword);
//     }

//     return (
//         <>
//             <h3>Sign-in</h3>
//             <div>
//                 <label htmlFor="userLogin">Enter your login</label>
//                 <InputClass type="text" id="userLogin" name="userLogin" />
//                 <label htmlFor="userPassword">Enter your password</label>
//                 <Input type="password" id="userPassword" name="userPassword" />
//             </div>
//             <button onClick={() => {
//                 dispatch(logIn());
//                 // setUserDataToLocStorage();
//                 }}>Sign-in</button>
//         </>        
//     );
// }

export default function SignIn (): JSX.Element {
    const dispatch = useAppDispatch();

    const setUserDataToLocStorage = (userLogin: string, userPassword: string): void => {
        localStorage.setItem('userLogin', userLogin);
        localStorage.setItem('userPassword', userPassword);
        console.log(localStorage.getItem('userLogin'));
        console.log(localStorage.getItem('userPassword'));
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
            <h2>Sign-in</h2>
            <div style={{display: "flex", flexDirection: "column", width: "200px"}}>
                <label htmlFor="userLogin"><b>Enter your login</b></label>
                <InputClass type="text" id="userLogin" name="userLogin"
                onInputChange={handleLoginChange} inputState={LoginState}/>
                <label htmlFor="userPassword"><b>Enter your password</b></label>
                <InputClass type="password" id="userPassword" name="userPassword" 
                onInputChange={handlePasswordChange} inputState={PasswordState}/>
            </div>
            <button onClick={() => {
                dispatch(logIn());
                setUserDataToLocStorage(LoginState, PasswordState);
            }}>Sign-in</button>
        </>        
    );
}