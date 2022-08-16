import { Link } from "react-router-dom";
import { useState } from "react";

import { useAppSelector } from "../../../hooks/hooks";

import s from './main.module.css';

export default function Main (): JSX.Element {
    const [currentYear, setYear] = useState('2019');
    const [currentCategory, setCategory] = useState('race');
    
    const {userStatus, userLogin} = useAppSelector(state => state.main);

    const addHistoryToLocStorage = () => {
        let currentDate = new Date();

       
        if (userStatus) {
           if (!localStorage.getItem(`${userLogin}-history`)) {
            console.log(localStorage.getItem(`${userLogin}-history`))
            localStorage.setItem(`${userLogin}-history`, 
            JSON.stringify([{
                searchDate: currentDate.toLocaleString(),
                yearInStorage: currentYear, 
                categoryInStorage: currentCategory}]));
           } else {

            let arrayOfHistory = JSON.parse(localStorage.getItem(`${userLogin}-history`) as string);

            arrayOfHistory.push({
            searchDate: currentDate.toLocaleString(),
            yearInStorage: currentYear, 
            categoryInStorage: currentCategory});


            localStorage.setItem(`${userLogin}-history`, 
            JSON.stringify(arrayOfHistory));
           }
        }
    };

    return (
        <>
            <p className={s.info}>Some text about 
                the Application</p>
            <form>
                <label htmlFor="year" style={{marginRight: '10px'}}>Choose 
                    season (2015-2019):</label>
                <select id="year" name="year" onChange={(event) => setYear(event.target.value)}>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                </select>
                <p>Choose category:</p>
                <div className={s.radioInput} onClick={(event: any) => setCategory(event.target.value)}>
                    <input type="radio" id="userChoice1" name="category" value="race"/>
                    <label htmlFor="userChoice1">Race</label>

                    <input type="radio" id="userChoice2" name="category" value="pilot"/>
                    <label htmlFor="userChoice2">Pilot</label>
                </div>
                <div>
                    <Link to={"/search?year=" + currentYear + "&category=" + currentCategory}>
                        <button type="submit" onClick={() => {
                            addHistoryToLocStorage();
                        }}>Search</button>
                    </Link>
                </div>
            </form>
        </>
    );
}
