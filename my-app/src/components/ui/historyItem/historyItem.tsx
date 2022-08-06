import { Link } from "react-router-dom"

import { HistoryItemTyping } from "../../../types/historyTyping"

export default function HistoryItem ({searchDate, yearInStorage,
     categoryInStorage, index}: HistoryItemTyping): JSX.Element {

    return (
        <li>
            <Link style={{display: "flex", color:"black"}} to={"/search?year=" + yearInStorage + "&category=" + categoryInStorage}>
                <ul style={{listStyle: "none", display: "flex",
                backgroundColor: "gold", width: "680px", marginBottom: "20px", 
                fontSize: "22px", height: "50px", alignItems: "center",
                justifyContent: "space-between", padding: "0 40px"}}>
                    <li><b>{index + 1}</b></li>
                    <li>Date and time: <b>{searchDate}</b></li>
                    <li>Year: <b>{yearInStorage}</b></li>
                    <li>Category: <b>{categoryInStorage}</b></li>
                </ul>
                <button style={{height: "50px", marginLeft: "20px"}}>Delete</button>
            </Link>
        </li>
    )
}