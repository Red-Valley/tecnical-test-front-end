import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCharacters } from '../../actions/charactersActions'
import Character from '../../components/Character/Character'
import './mainPage.css'
import Search from '../../components/Search/Search'
import Pagination from '../../components/Pagination/Pagination'
import Loader from '../../components/Loader/Loader'

const MainPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		const cargarProductos = () => dispatch(getAllCharacters())
		cargarProductos()
	}, [])
	const characterRedux = useSelector(state => state.charactersReducer.characters)
	const loading = useSelector(state => state.charactersReducer.loading)

	return (
		<div>
			<Search />
			<div className="background">
				<h1>Rick and Morty</h1>
			</div>
			{loading && <Loader />}
			<div className="card__main">
				{!loading && characterRedux.length > 0 && (
					characterRedux.map(personaje => (
						<Character key={personaje.id} personaje={personaje} />
					))
				)}
			</div>
			<Pagination />
		</div>
	)
}

export default MainPage
