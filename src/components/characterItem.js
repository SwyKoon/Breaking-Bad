import { Link } from 'react-router-dom'

const characterItem = ({ character }) => {
    return ( 
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={ character.img } alt='' />
                </div>
                <Link to={`/character/${ character.char_id }`}>
                    <div className='card-back'>
                        <h1>{ character.name }</h1>
                        <ul>
                            <li>
                            <strong>Actor Name:</strong> { character.portrayed }
                            </li>
                            <li>
                            <strong>Occupation:</strong> { character.occupation }
                            </li>
                            <li>
                            <strong>Birthday:</strong> { character.birthday }
                            </li>
                            <li>
                            <strong>Status:</strong> { character.status }
                            </li>
                        </ul>
                    </div>
                </Link>
            </div>
        </div>
    );
}
 
export default characterItem;