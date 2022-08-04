import { dataAPI } from "../../utils/dataAPI";
import { useSearchParams } from "react-router-dom";

import CardPilot from "../cardPilot/cardPilot";

import s from './searchPilot.module.css';


export default function SearchPilot (): JSX.Element {
    let [searchParam]: any = useSearchParams();

    const {data: posts} = dataAPI.useFetchPilotQuery(
    searchParam.get("year"));

    return ( 
        <div className={s.pilotsWrapper}> 

            {posts?.map((card:any) => 
                <CardPilot key={card.POS} pos={card.POS} pts={card.PTS} name={card.Name} 
                country={card.Country} car={card.Car}/>
            )}
        </div>
    )
}