import React from 'react'
import {useDispatch} from 'react-redux'
import {getSingleDataAction} from '../../../config/actions'
import {Link} from 'react-router-dom'
import './style.css'

const CardComponent = ({imageCharacter,titleCharacter,idCharacter}) => {
    const dispatch = useDispatch()
    const handleSingleCharacter = () => {dispatch(getSingleDataAction(idCharacter))}

	return (
        <div className="card mb-4 bg-dark shadow" style={{width: '14rem'}}>
            <img src={imageCharacter} className="card-img-top" alt='imageIcon'/>
            <div className="card-body">
                <Link  className="card-link" to='/detail' onClick={handleSingleCharacter}>
                    <h5 className="card-title">{titleCharacter}</h5>
                </Link>
            </div>
        </div>
	)
}

export default CardComponent