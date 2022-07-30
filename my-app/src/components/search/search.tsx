import { useAppSelector } from "../../hooks/hooks"; 

export default function Search (): JSX.Element {
    const yearSearch = useAppSelector(state => state.search.search.year);
    const categorySearch = useAppSelector(state => state.search.search.category);

    const {cards, isLoading, error} = useAppSelector(state => state.cards)

    return (
        <>
            <h2>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>{error}</h1>}
                Searching parameters:{JSON.stringify(cards, null , 5)}
            </h2>
            <span>Choosen season:{yearSearch}</span><br/>
            <span>Choosen category:{categorySearch}</span>
        </>
    );
}