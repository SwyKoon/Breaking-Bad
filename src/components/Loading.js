import Spin from '../img/spinner.gif'

const Loading = () => {
    return ( 
        <img
            src={ Spin }
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading'
        />
    );
}
    
export default Loading;