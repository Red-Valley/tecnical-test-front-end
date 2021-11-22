import {
	GET_ALLCHARACTERS,
	GET_ALLCHARACTERS_SUCCESS,

	GET_SIGLE_CHARACTER,
	GET_SINGLE_CHARACTER_SUCCESS,

	SEARCH_CARACTER,
	SEARCH_CHARACTER_SUCCESS,

	GET_PAGINATION,
	GET_PAGINATION_SUCCESS,
	GET_PAGINATION_ERROR
} from '../types'
import clientAxios from '../config/axios'


export function getAllCharacters() {
	return async (dispatch) => {
		dispatch(get_allCharacters())
		try {
			const response = await clientAxios.get('/character')
			dispatch(get_allCharacters_success(response.data.results))
		} catch (error) {
		}
	}
}

export function getSingleCharacter(id) {
	return async (dispatch) => {
		dispatch(fetchgetSingleCharacter())
		try {
			const response = await clientAxios.get(`/character/${id}`)
			dispatch(get_singleCharacter_success(response.data))
		} catch (error) {

		}
	}
}

export function searchCharacter(search) {
	return async (dispatch) => {
		dispatch(ReqsearchCharacter())
		try {
			const response = await clientAxios.get(`/character/?name=${search}`)
			dispatch(searchCharacter__success(response.data.results))
		} catch (error) {
			dispatch(paginationError())
		}
	}
}

export function fetchGetPagination(number) {
	return async (dispatch) => {
		dispatch(GetPagination())
		try {
			const response = await clientAxios.get(`/character/?page=${number}`)
			dispatch(getPaginationSuccess(response.data.results))
		} catch (error) {
		}
	}
}

const get_allCharacters = () => ({
	type: GET_ALLCHARACTERS,
	payload: true
})

const get_allCharacters_success = (data) => ({
	type: GET_ALLCHARACTERS_SUCCESS,
	payload: data
})
const fetchgetSingleCharacter = () => ({
	type: GET_SIGLE_CHARACTER,
	payload: true
})
const get_singleCharacter_success = (data) => ({
	type: GET_SINGLE_CHARACTER_SUCCESS,
	payload: data
})

const ReqsearchCharacter = () => ({
	type: SEARCH_CARACTER,
	payload: true
})

const searchCharacter__success = (data) => ({
	type: SEARCH_CHARACTER_SUCCESS,
	payload: data
})

const GetPagination = () => ({
	type: GET_PAGINATION,
	payload: true
})

const getPaginationSuccess = (data) => ({
	type: GET_PAGINATION_SUCCESS,
	payload: data
})

const paginationError = () => ({
	type: GET_PAGINATION_ERROR,
	payload: true
})