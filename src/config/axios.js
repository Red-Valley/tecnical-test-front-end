import axios from 'axios'

const clientAxios = axios.create({
	baseURL: 'https://rickandmortyapi.com/api/'
})

export default clientAxios