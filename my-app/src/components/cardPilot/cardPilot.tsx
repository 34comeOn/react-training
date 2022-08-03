import { useAppSelector } from "../../hooks/hooks";

import { PilotCard } from "../../types/card";

import FavouriteButton from "../buttons/favouriteButton/favouriteButton";
import MoreInfoButton from "../buttons/moreInfoButton/moreInfoButton";

export default function CardPilot (props: PilotCard): JSX.Element {
    const {POS, PTS, Name, Country, Car} = props;

    const {userStatus} = useAppSelector(state => state.main)
    
    return (
        <div>
            <h3>Position: {POS}</h3>
            <ul style={{width:"200px", height:"100px", backgroundColor: "gold", 
                marginBottom: "10px", listStyle: "none", padding: "15px"
                }}>

                <li>
                    Pilot name: <b>{Name}</b>
                </li>
                <li> 
                    From: <b>{Country}</b>
                </li>
                <li> 
                    Bolid: <b>{Car}</b>
                </li>
                <li> 
                    Points: <b>{PTS}</b>
                </li>
            </ul>
            <MoreInfoButton margin="38px" />
            {userStatus && <FavouriteButton />}
        </div>
    )
}