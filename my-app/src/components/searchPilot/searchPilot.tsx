import { dataAPI } from "../../utils/dataAPI";
import { useSearchParams } from "react-router-dom";

import CardPilot from "../cardPilot/cardPilot";

import s from './searchPilot.module.css';


export default function SearchPilot (): JSX.Element {
    let [searchParam]: any = useSearchParams();

    const {data: dataFromAPI} = dataAPI.useFetchPilotQuery(
    searchParam.get("year"));

    return ( 
        <div className={s.pilotsWrapper}> 

            {dataFromAPI?.map((card) => 
                <CardPilot key={card.POS} POS={card.POS} PTS={card.PTS} Name={card.Name} 
                Country={card.Country} Car={card.Car}/>
            )}
        </div>
    )
}