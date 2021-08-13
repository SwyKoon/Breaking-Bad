import { Link } from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumber = [];

    for(let i=1;i<= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumber.push(i)
    }
    return ( 
        <nav>
            <ul className='pagination'>
                { pageNumber.map(number =>(
                    <li key={ number } className="page-item">
                        <Link onClick={()=> paginate(number)} to={ `/page-number/${number}` } className="page-link">{ number }</Link>
                    </li>
                )) }
            </ul>
        </nav>
    );
}
 
export default Pagination;