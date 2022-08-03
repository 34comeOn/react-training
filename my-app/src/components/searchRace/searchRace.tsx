import { dataAPI } from "../../utils/dataAPI";
import { useSearchParams } from "react-router-dom";


// import s from './searchRace.module.css';
type RaceObj = {
    raceName?: string,
    season?: string,
}
type RaceCardType = {
    post: [RaceObj],
}

// function RaceCard (props: RaceCardType): JSX.Element {
//     const {raceName} = props;

//     return (
//         <li> {raceName}</li>
//     )
// }


function RaceCard ({ post }: any )  {
    console.log(post[0])
    return (
      <article >
        <h3>{post[0].raceName}</h3>
        <h3>{post[0].season}</h3>
        
      </article>
    )
  }


export default function SearchRace (): JSX.Element {
    let [searchParam]:any = useSearchParams();
    
    const {data: posts,
        isLoading,
        isSuccess,
        isError,
        error} = dataAPI.useFetchRaceQuery(
        searchParam.get("year"));
    console.log(typeof posts)
    



    let content

    if (isLoading) {
      content = <h1>Loading...maFaca" </h1>
    } else if (isSuccess) {
      content = posts.map(post => <RaceCard post={post} />)
    } else if (isError) {
      content = <div>{error.toString()}</div>
    }
  
    return (
      <section className="posts-list">
        <h2>Posts</h2>
        {content}
      </section>
    )
  
    // const renderItems =  posts?.map((item, tempKey) => 
    //     <RaceCard key={tempKey} raceName={item.raceName} />        
    // );   

    // return ( 
    //     <ul className={s.raceWrapper}>{renderItems}</ul>
    // )
}