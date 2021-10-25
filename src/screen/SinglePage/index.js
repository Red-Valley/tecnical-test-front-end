import React from 'react'
import{useSelector} from 'react-redux'
import NavBarComponent from '../../components/Molecules/NavBar'
import DetailComponent from '../../components/Organisms/DetailComponent'

const SinglePage = () => {
    
    const arraySingleData = useSelector((state) => state.alldata.singleData.data)
	return (
		<>
			<NavBarComponent NavBarTitle={arraySingleData?.name}/>
			<DetailComponent 
				imageValue={arraySingleData?.image}
				namecharacter={arraySingleData?.name??'-'}
				statuscharacter={arraySingleData?.status??'-'}
				speciescharacter={arraySingleData?.species??'-'}
				typecharacter={arraySingleData?.type??'-'}
				gendercharacter={arraySingleData?.gender??'-'}
				origincharacter={arraySingleData?.origin?.name??'-'}
				locationcharacter={arraySingleData?.location?.name??'-'}
			/>
		</>
	)
}

export default SinglePage