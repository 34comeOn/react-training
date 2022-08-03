import { useAppSelector } from "../../hooks/hooks";

import { PilotCard } from "../../types/card";

import FavouriteButton from "../buttons/favouriteButton/favouriteButton";
import MoreInfoButton from "../buttons/moreInfoButton/moreInfoButton";

export default function CardPilot ({pos, pts, name, country, car}: PilotCard): JSX.Element {
    // const {pos, PTS, Name, Country, Car} = props;

    const {userStatus} = useAppSelector(state => state.main)
    
    return (
        <div>
            <h3>Position: {pos}</h3>
            <ul style={{width:"200px", height:"100px", backgroundColor: "gold", 
                marginBottom: "10px", listStyle: "none", padding: "15px"
                }}>

                <li>
                    Pilot name: <b>{name}</b>
                </li>
                <li> 
                    From: <b>{country}</b>
                </li>
                <li> 
                    Bolid: <b>{car}</b>
                </li>
                <li> 
                    Points: <b>{pts}</b>
                </li>
            </ul>
            <MoreInfoButton margin="38px" />
            {userStatus && <FavouriteButton />}
        </div>
    )
}