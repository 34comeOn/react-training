import { dataAPI } from "../../../utils/dataAPI";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import CardPilot from "../cardPilot/cardPilot";

import s from './searchPilot.module.css';


export default function SearchPilot (): JSX.Element {
    const [inputState, setInputState] = useState('');
    let [searchParam]: any = useSearchParams();

    const {data: posts} = dataAPI.useFetchPilotQuery(
    searchParam.get("year"));

    return ( 
        <>
            <label htmlFor="pilotSubSearch">
                <b style={{fontSize: "20px", margin: "20px 10px", display: "inline-block"
                }}>
                Find your pilot in list:</b>
            </label>
            <input type="text" id="pilotSubSearch" value={inputState} 
                onChange= {(event) => setInputState(event.target.value)} style={{fontSize: "20px"}}/>
            
            <div className={s.pilotsWrapper}> 

                {posts?.filter((card: any) => card.Name.toLowerCase().includes(inputState.toLowerCase())).map((card:any) => 
                    <CardPilot key={card.POS} pos={card.POS} pts={card.PTS} name={card.Name} 
                    country={card.Country} car={card.Car}/>
                )
                
                }
            </div>
        </>
    )
}