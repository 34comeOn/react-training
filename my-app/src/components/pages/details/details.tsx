import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";

import { favouriteInfo } from "../../../store/reducers/mainSlice";

import FavouriteButton from "../../buttons/favouriteButton/favouriteButton";

export default function Details (): JSX.Element {
    const dispatch = useAppDispatch();
    const {cardDetails, userStatus} = useAppSelector(state => state.main);

    return (
        <>
            <h2>Statistic details</h2>
            <ul style={{width:"400px", height:"300px", backgroundColor: "#fa3636", 
                marginBottom: "10px", listStyle: "none", padding: "15px", fontSize: "22px"
                }}>
                <li>
                <b style={{marginBottom: "30px", display: "block"}}> Season: {cardDetails?.season}</b>
                </li>
                <li>
                    Pilot name: <b>{cardDetails?.name}</b>
                </li>
                <li> 
                    Pilot`s season result : <b>{cardDetails?.pos}</b>
                </li>
                <li> 
                    From: <b>{cardDetails?.country}</b>
                </li>
                <li> 
                    Bolid: <b>{cardDetails?.car}</b>
                </li>
                <li> 
                    Pilot`s total points: <b>{cardDetails?.pts}</b>
                </li>
            </ul>
            {userStatus && <FavouriteButton onClick={() => dispatch(favouriteInfo({
                    category: "pilots statistic",
                    season: cardDetails?.season,
                    pos: cardDetails?.pos,
                    name: cardDetails?.name,
                    country: cardDetails?.country,
                    car: cardDetails?.car,
                    pts: cardDetails?.pts,            
                }))}/>}
        </>

    );
}