import { useState } from 'react'
import useFetchData from '../useFetchData';
import Headers from '../components/Header';
import CharacterCard from '../components/characterCards'
import Search from '../components/Search'
import Pagination from '../components/Pagination'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)
    const [query, setQuery] = useState('')

    const { characters, isPending } = useFetchData(`https://www.breakingbadapi.com/api/characters?name=${ query }`)
    
    // Get current characters 
    const indexLast = currentPage * postsPerPage
    const indexFirst = indexLast - postsPerPage
    const currentPosts = characters.slice(indexFirst, indexLast)

    // Change pages 
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    return (
        <div className="container">
            <Headers />
            <Search  getQuery={(q) => setQuery(q)} />
            <CharacterCard isPending={ isPending } characters={ currentPosts } />
            <Pagination postsPerPage={ postsPerPage } totalPosts={ characters.length } paginate={ paginate } />
        </div>
    );
}
 
export default Home;