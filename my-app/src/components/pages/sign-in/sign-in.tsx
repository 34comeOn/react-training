import UserInputBlock from "../../logIn/userInputBlock/userInputBlock";


export default function SignIn (): JSX.Element {
    const buttonName = "Sign-in";

    return (
        <>
            <h2>Sign-in</h2>
            <UserInputBlock buttonName={buttonName} />
        </>        
    );
}