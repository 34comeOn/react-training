import { dataAPI } from "../../utils/dataAPI";


export default function Search (): JSX.Element {
    const yearFromURL = document.location.search.split('=')[1].split(',')[0];
    const categoryFromURL = document.location.search.split('=')[2].split(',')[0];
   

    const {data: dataFromAPI, isLoading, error} = dataAPI.useFetchPilotQuery(
        yearFromURL);
   
    return (
        <>
            <h2>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Download issue... </h1>}
                Searching parameters:{JSON.stringify(dataFromAPI, null , 5)}
            </h2>
            <span>Choosen season:{yearFromURL}</span><br/>
            <span>Choosen category:{categoryFromURL}</span>
        </>
    );
}