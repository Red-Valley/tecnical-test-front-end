import React from 'react'
import CardComponent from '../../Molecules/CardComponent'

const HomeComponent = ({arrayData}) => {

        return(
                <div className="p-4 bg-dark">
                        <div className="d-flex justify-content-center justify-content-sm-between align-items-center flex-wrap">
                                {
                                        arrayData?.data?.results.map((item,i)=>(
                                                <CardComponent key={i} imageCharacter ={item?.image} titleCharacter={item?.name} idCharacter={item?.id}/>
                                        ))
                                }   
                        </div>
                        
                </div>
        )
}

export default HomeComponent