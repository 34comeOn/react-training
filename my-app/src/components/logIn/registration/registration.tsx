import UserInputBlock from "../userInputBlock/userInputBlock";

export default function Registration (): JSX.Element {
    const buttonName = "Register";

    return (
        <>
            <h3>Registration</h3>
            <UserInputBlock buttonName={buttonName} />
        </>        
    );
}