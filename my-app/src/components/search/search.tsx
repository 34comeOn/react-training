import { dataAPI } from "../../utils/dataAPI";
import { useSearchParams } from "react-router-dom";

import SearchPilot from "../searchPilot/searchPilot";
import SearchRace from "../searchRace/searchRace";

export default function Search (): JSX.Element {
    
    
    let [searchParam]: any = useSearchParams();
    
    let chosenCategory = searchParam.get("category");

    const { isLoading, error} = dataAPI.useFetchPilotQuery(
        searchParam.get("year"));
  
    return (
        <>            
            <span>Choosen season:{searchParam.get("year")}</span><br/>
            <span style={{marginBottom: "20px", display: "block"}}>Choosen category:{searchParam.get("category")}</span>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Download issue... </h1>}           
            {chosenCategory === "pilot"? <SearchPilot />: <SearchRace />}
        </>
    );
}