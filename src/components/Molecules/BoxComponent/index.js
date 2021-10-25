import React from 'react'

const BoxComponent = ({children}) => {

        return(
                <div className="container bg-dark">
                    {children}    
                </div>
        )
}

export default BoxComponent