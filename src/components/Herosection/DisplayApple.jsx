import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const DisplayApple = ({movedata}) => {
    
    const { photo, name } = movedata;
  
  
    return (
      <div className="justify-center flex">

        <Link to="/applemobiles">
            <figure><img className='sm:w-[60%] w-56 sm:px-0 px-3' src={photo} alt="i" /></figure>
            <h2 className="card-title sm:w-[60%] sm:text-base text-xs h-10 w-56 flex justify-center mt-4">{name}</h2>
        </Link>
            
          
      </div>
    )
}

DisplayApple.propTypes = {
    movedata: PropTypes.object,
}

export default DisplayApple