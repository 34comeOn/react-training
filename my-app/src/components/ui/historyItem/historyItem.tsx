import { Link } from "react-router-dom";

import { HistoryItemTyping } from "../../../types/historyTyping";

import s from './historyItem.module.css';

export default function HistoryItem ({searchDate, yearInStorage,
     categoryInStorage, index}: HistoryItemTyping): JSX.Element {

    return (
        <li>
            <Link style={{display: "flex", color:"black"}} to={"/search?year=" + yearInStorage + "&category=" + categoryInStorage}>
                <ul className={s.historyItemList} >
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