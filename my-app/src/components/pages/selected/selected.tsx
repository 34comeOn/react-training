import { useAppSelector } from "../../../hooks/hooks";

export default function Selected (): JSX.Element {

    const {favouriteCards} = useAppSelector(state => state.main);
 console.log(favouriteCards)
    return (
        <>
            <h2>Favourite</h2>
            {favouriteCards?.filter((card: any) => card !== null).map((card:any) => 
                    
                
                <ul style={{width:"400px", height:"300px", backgroundColor: "#36f833", 
                marginBottom: "10px", listStyle: "none", padding: "15px", fontSize: "22px"
                }}>
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
                </ul>
                )
                
            }
        </>
    );
}