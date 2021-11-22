import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSingleCharacter } from '../../actions/charactersActions'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import './singleCharacter.css'
const SingleCharacter = () => {
  let { id } = useParams()
  let dispatch = useDispatch()
  const loading = useSelector(state => state.charactersReducer.loading)
  const singleCharacter = useSelector(state => state.charactersReducer.character)
  useEffect(() => {
    dispatch(getSingleCharacter(id))
  }, [id])

  return (
    <div>
      {loading && <Loader />}
      {!loading && Object.keys(singleCharacter).length > 0 && (
        <div className="character__main">
          <div className="character__img">
            <img src={singleCharacter.image} />
          </div>
          <ul className="character__list">
            <li><p>Status: </p><p>{singleCharacter.status}</p></li>
            <li><p>Name: </p><p>{singleCharacter.name}</p></li>
            <li><p>Gender: </p><p>{singleCharacter.gender}</p></li>
            <li><p>species: </p><p> {singleCharacter.species}</p></li>
            <li><p>Origin: </p><p> {singleCharacter.location.name}</p></li>
          </ul>
          <Link to="/" className="character__btn">Go back</Link>
        </div>
      )}
    </div>
  )
}

export default SingleCharacter
