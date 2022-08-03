import { dataAPI } from "../../utils/dataAPI";
import { useSearchParams } from "react-router-dom";


import s from './searchRace.module.css';

export default function SearchRace (): JSX.Element {
    let [searchParam]: any = useSearchParams();
    
    const {data: dataFromAPI} = dataAPI.useFetchRaceQuery(
        searchParam.get("year"));

    return ( 
        <div className={s.raceWrapper}> 
                    {dataFromAPI?.map((card, id) => 
                <p key={id}>data</p>
            )}
        </div>
    )
}