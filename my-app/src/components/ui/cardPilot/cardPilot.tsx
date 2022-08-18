import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { useSearchParams, Link } from "react-router-dom";

import { detailInfo, favouriteInfo } from "../../../store/reducers/mainSlice";

import { PilotCardT } from "../../../types/card";

import FavouriteButton from "../../buttons/favouriteButton/favouriteButton";
import MoreInfoButton from "../../buttons/moreInfoButton/moreInfoButton";

export default function CardPilot ({pos, pts, name, country, car}: PilotCardT): JSX.Element {
    let [searchParam] = useSearchParams();
    const dispatch = useAppDispatch();
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
            <Link to="/details" title="/details">
                <MoreInfoButton margin="38px" onClick={() => dispatch(detailInfo({
                    category: "pilots statistic",
                    season: searchParam.get("year"),
                    pos,
                    name,
                    country,
                    car,
                    pts,            
                }))} />
            </Link>
            {userStatus && <FavouriteButton onClick={() => dispatch(favouriteInfo({
                    category: "pilots statistic",
                    season: searchParam.get("year"),
                    pos,
                    name,
                    country,
                    car,
                    pts,            
                }))}/>}
        </div>
    )
}