import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Characterdetails() {
  const pageURL = window.location.href;
  const urlArray = pageURL.split('/');
  const pageID = parseInt(urlArray[urlArray.length - 1], 10);
  const characters = useSelector((state) => (state.charactersReducer));
  const trueCharacter = (characters.filter((character) => character.id === pageID))[0];
  return (
    <div>
      <div >
        <div className="m-3">
          <Link style={{ textDecoration: 'none' }} className='btn btn-outline-dark lead' to="/characters">
            Back
          </Link>
        </div>
      </div>
      <div className="card-img-top">
        <div>
          <img src={trueCharacter.image} alt={trueCharacter.image} />
        </div>
      </div>
      <h5 className="m-4">
        {trueCharacter.name}
      </h5>
      <hr />
      <div>
        <ul>
          <li>
            First Seen on:
            {'  '}
            {trueCharacter.origin.name}
          </li>
          <li>
            Last Seen On:
            {'  '}
            {trueCharacter.location.name}
          </li>
          <li>
            Status:
            {'  '}
            {trueCharacter.status}
          </li>
          <li>
            Species:
            {'  '}
            {trueCharacter.species}
          </li>
          <li>
            Gender:
            {'  '}
            {trueCharacter.gender}
          </li>
        </ul>

      </div>
      <hr />
      <p>Played on {trueCharacter.episode.length} Episode(s)</p>

      <p>Total Episodes: 51</p>
    </div>
  );
}

export default Characterdetails;
