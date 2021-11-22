import React from 'react'
import { Link } from 'react-router-dom'
import './character.css'
const Character = ({ personaje: { id, name, status, image } }) => {
	console.log(id, name, status)
	return (

		<div className="sigle__card">
			<Link to={`/character/${id}`}>
				<div className="sigle__card__image">
					<img src={image} alt={name} />
					<p className="single__card__id">{id}</p>
					<div className="single__card__status">
						<i className={status === "Alive" ? "live" : "dead"}><ion-icon name="radio-button-on-outline"></ion-icon></i>
						<p>{status}</p>
					</div>
				</div>
				<div className="sigle__card__description">
					<div className="single__card__name">
						<i><ion-icon name="id-card-outline"></ion-icon></i>
						<p>{name}</p>
					</div>


				</div>
			</ Link >
		</div>

	)
}

export default Character
