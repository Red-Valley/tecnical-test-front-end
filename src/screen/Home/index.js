import React,{useState,useEffect} from 'react'
import{useDispatch,useSelector} from 'react-redux'
import {getAllDataAction} from '../../config/actions'
import NavBarComponent from '../../components/Molecules/NavBar'
import HomeComponent from '../../components/Organisms/HomeComponent'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './style.css'

const Home = () => {
	const dispatch= useDispatch()
	const [page, setPage] = useState(1)
	const [limit] = useState(20)
	const [pageQuatity, setPageQuantity] = useState(1)
	const [filter, setFilter] = useState('')
	const handleChangeFilter = (e) => {
		setFilter(e.target.value)
	}
	const handleChangePage = (__, value) => {
		setPage(value)
	}
	// para calcular cuantas paginas debo retornar al paginador
	
	useEffect(() => {
		const readData = () => dispatch(getAllDataAction(page,filter))
		readData()
	}, [dispatch,page,filter])
	const arrayData = useSelector((state) => state.alldata.allData)
	const totalCharacter =arrayData?.data?.info?.count
	useEffect(() => {
		const calculatePages = () => {
			const quantity = Math.ceil(totalCharacter / limit)
			setPageQuantity(quantity)
		}

		calculatePages()
	}, [limit,totalCharacter])

	return (
		<>
			<NavBarComponent NavBarTitle="RICK AND MORTY APP" viewSearch filter={filter} handleChangeFilter={handleChangeFilter}/>
			<HomeComponent arrayData={arrayData}/>
			<Stack spacing={2} className="bg-dark d-flex justify-content-center align-items-center">
				  <Pagination 
				  	size="large"
				  	page={page}
					count={pageQuatity}
					onChange={handleChangePage}
				  />
    		</Stack>
		</>
	)
}

export default Home