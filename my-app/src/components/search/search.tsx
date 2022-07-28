import { useSelector } from "react-redux";

export default function Search (): JSX.Element {

    const yearSearch = useSelector(state => state.search.year);
    const categorySearch = useSelector(state => state.search.category);
    
    return (
        <>
            <h2>Searching parameters:</h2>
            <span>Choosen season:{yearSearch}</span><br/>
            <span>Choosen category:{categorySearch}</span>
        </>
    );
}