import { dataAPI } from "../../utils/dataAPI";
import { useSearchParams } from "react-router-dom";


import s from './searchRace.module.css';

type RaceCardType = {
    raceName: string,
}

function RaceCard (props: RaceCardType): JSX.Element {
    const {raceName} = props;
// console.log(raceName)
    return (
        <li> {raceName}</li>
    )
}

export default function SearchRace (): JSX.Element {
    let [searchParam]:any = useSearchParams();
    
    const {data: dataFromAPI} = dataAPI.useFetchRaceQuery(
        searchParam.get("year"));
        console.log(JSON.stringify(dataFromAPI))
    
    // let dd = dataFromAPI?.splice(0);
    const renderItems =  dataFromAPI?.map((item, tempKey) => 
        <RaceCard key={tempKey} raceName={item.raceName} />        
    );   

    return ( 
        <ul className={s.raceWrapper}>{renderItems}</ul>
    )
}