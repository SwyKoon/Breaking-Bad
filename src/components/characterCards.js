import CharacterItem from './characterItem'
import Loading from './Loading'

const characterCard = ({ characters,isPending }) => {
    if(isPending){
        return (<Loading />)
    }
    else{
        return(
            <section className='cards'>
                { characters.map((character) => (
                    <CharacterItem key={character.char_id} character={character}></CharacterItem>
                ))}
            </section>
        )
    }
    
}
 
export default characterCard;