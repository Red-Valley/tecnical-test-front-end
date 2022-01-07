import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <li className="card m-2" style={{ width: '20rem' }} key={character.id}>
      <img src={character.image} alt={character.name} className="card-img-top" />
        <div className='text-center'>          
          <div className=" m-3">
            <Link style={{ textDecoration: 'none' }} className='btn btn-outline-dark lead' to={`/character/${character.id}`}>{character.name}</Link>
          </div>
        </div>
    </li>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Character;
