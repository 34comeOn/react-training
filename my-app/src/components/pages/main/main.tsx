import { Link } from "react-router-dom";
import { useState } from "react";




export default function Main (): JSX.Element {
    const [currentYear, setYear] = useState('2019');
    const [currentCategory, setCategory] = useState('race');
    
   
    return (
        <>
            <p style={{marginTop: '50px', marginBottom: '50px'}}>Some text about the Application</p>
            <form>
                <label htmlFor="year" style={{marginRight: '10px'}}>Choose season (2015-2019):</label>
                <select id="year" name="year" onChange={(event) => setYear(event.target.value)}>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                </select>
                <p>Choose category:</p>
                <div onClick={(event: any) => setCategory(event.target.value)}>
                    <input type="radio" id="userChoice1" name="category" value="race"/>
                    <label htmlFor="userChoice1">Race</label>

                    <input type="radio" id="userChoice2" name="category" value="pilot"/>
                    <label htmlFor="userChoice2">Pilot</label>
                </div>
                <div>
                    <Link to={"/search?year=" + currentYear + "&category=" + currentCategory}>
                        <button type="submit">Search</button>
                    </Link>
                </div>
            </form>
        </>
    );
}