import { useAppSelector } from "../../../hooks/hooks";

import FavouriteButton from "../../buttons/favouriteButton/favouriteButton";

export default function Details (): JSX.Element {

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
            {userStatus && <FavouriteButton />}
        </>

    );
}