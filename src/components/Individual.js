import { useParams } from "react-router-dom";
import useFetchData from "../useFetchData";
import Loading from "./Loading";

const Individual = () => {
    const { id } = useParams()
    const { characters, isPending } = useFetchData('https://www.breakingbadapi.com/api/characters/' + id)
    if(isPending){
        return <Loading />
    }
    else{
        return(
            <div className="parent">
                <img src={ characters[0].img } alt="" />
                <h1>{ characters[0].name }</h1>
                <div className="data-info">
                    <div className="info">
                            <ul>
                                <li>
                                <strong>Birthday:</strong> { characters[0].birthday }
                                </li>
                                <li>
                                <strong>Occupation:</strong> { characters[0].occupation }
                                </li>
                                <li>
                                <strong>Status:</strong> { characters[0].status }
                                </li>
                                <li>
                                <strong>NickName:</strong> { characters[0].nickname}
                                </li>
                                <li>
                                <strong>Actor Name:</strong> { characters[0].portrayed }
                                </li>
                                <li>
                                <strong>Seasons:</strong> { characters[0].appearance+" " }
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Individual;