import { dataAPI } from "../../../utils/dataAPI";
import { useSearchParams } from "react-router-dom";

import ErrorBoundary from "../../../utils/errorBoundary/errorBoundary";
import SearchPilot from "../../ui/searchPilot/searchPilot";
import SearchRace from "../../ui/searchRace/searchRace";

export default function Search (): JSX.Element { 
    
    let [searchParam] = useSearchParams();
    
    let chosenCategory = searchParam.get("category");

    const { isLoading, error} = dataAPI.useFetchPilotQuery(
        searchParam.get("year") as string);
  
    return (
        <ErrorBoundary>            
            <span style={{marginTop: "20px", display: "block"}}>Choosen season:{searchParam.get("year")}</span><br/>
            <span style={{marginBottom: "20px", display: "block"}}>Choosen category:{searchParam.get("category")}</span>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Download issue... </h1>}           
            {chosenCategory === "pilot"? <SearchPilot />: <SearchRace />}
        </ErrorBoundary>
    );
}