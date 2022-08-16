import { useAppSelector } from "../../../hooks/hooks";

import HistoryItem from "../../ui/historyItem/historyItem";

import { HistoryTyping } from "../../../types/historyTyping";

export default function History (): JSX.Element {

    const {userLogin} = useAppSelector(state => state.main);

    const history: HistoryTyping[] = JSON.parse(localStorage.getItem(`${userLogin}-history`)  as string);
    
    return (
        <>
            <h2>History</h2>
            <ul style={{listStyle: "none"}}>
                {history? history.map((item, index) => 
                <HistoryItem key={index} index={index}
                searchDate={item.searchDate}
                yearInStorage={item.yearInStorage}
                categoryInStorage={item.categoryInStorage}
                 />
                ): "No history yet!"}
            </ul>
        </>
    );
}