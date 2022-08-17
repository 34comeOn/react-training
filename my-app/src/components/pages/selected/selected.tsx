import { useAppSelector } from "../../../hooks/hooks";

import s from './selected.module.css';

export default function Selected (): JSX.Element {

    const {favouriteCards} = useAppSelector(state => state.main);
 console.log(favouriteCards)
    return (
        <>
            <h2>Favourite</h2>
            {favouriteCards?.map((card, index) => 
                    
                
              (index !== 0)?  <ul key={index} className={s.selectedList}> 
                    <li>
                    <b style={{marginBottom: "30px", display: "block"}}> Season: {card.season}</b>
                    </li>
                    <li>
                        Pilot name: <b>{card.name}</b>
                    </li>
                    <li> 
                        Pilot`s season result : <b>{card.pos}</b>
                    </li>
                    <li> 
                        From: <b>{card.country}</b>
                    </li>
                    <li> 
                        Bolid: <b>{card.car}</b>
                    </li>
                    <li> 
                        Pilot`s total points: <b>{card.pts}</b>
                    </li>
                </ul> : undefined
                )
                
            }
        </>
    );
}