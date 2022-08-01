import { useAppSelector } from "../../hooks/hooks"; 
import { dataAPI } from "../../utils/dataAPI";


export default function Search (): JSX.Element {
    const yearSearch = useAppSelector(state => state.first.search.year);
    const categorySearch = useAppSelector(state => state.first.search.category);


    // const {cards, isLoading, error} = useAppSelector(state => state.cards)

    const {data: some, isLoading, error} = dataAPI.useFetchMyDataQuery(yearSearch);

    // console.log(some)

    return (
        <>
            <h2>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Download issue... </h1>}
                Searching parameters:{JSON.stringify(some, null , 5)}
            </h2>
            <span>Choosen season:{yearSearch}</span><br/>
            <span>Choosen category:{categorySearch}</span>
        </>
    );
}