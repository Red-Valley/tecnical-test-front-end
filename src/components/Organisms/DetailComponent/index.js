import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import BoxComponent from '../../Molecules/BoxComponent'
const DetailComponent = ({imageValue,namecharacter,statuscharacter,speciescharacter,typecharacter,gendercharacter,origincharacter,locationcharacter}) => {
        return(
            <>
            <div className="bg-dark d-flex justify-content-center align-items-center flex-column" style={{height:'100vh'}}>
                <h2 className="mb-4" >Character detail</h2>
                <div className="d-flex justify-content-xs-center justify-content-md-between flex-sm-column flex-md-row bg-dark">
                     <BoxComponent
                        children={
                            <div className="bgImage_container d-flex justify-content-center align-items-center">
                                <img src={imageValue} alt='imageIcon'/>
                            </div>
                        }
                     />
                     <BoxComponent
                        children={
                        <>
                            <p className='detailDescription'>Name: <span>{namecharacter}</span></p>
                            <p className='detailDescription'>Status: <span>{statuscharacter}</span></p>
                            <p className='detailDescription'>Species: <span>{speciescharacter}</span></p>
                            <p className='detailDescription'>Type: <span>{typecharacter}</span></p>
                            <p className='detailDescription'>Gender: <span>{gendercharacter}</span></p>
                            <p className='detailDescription'>Origin: <span>{origincharacter}</span></p>
                            <p className='detailDescription'>Location: <span>{locationcharacter}</span></p>
                        </>
                        }
                     />
                </div>
                <Link to='/' className="p-4">Go back</Link>
            </div>
            </>
        )
}

export default DetailComponent