import React from 'react'
import './style.css';

const NavBarComponent = ({NavBarTitle,viewSearch,filter,handleChangeFilter}) => {
	return (
       <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow col-xs-12">
            <div className="container-fluid row">
                <p className="text-center col-md-8">{NavBarTitle}</p>
                {
                    viewSearch&&(
                        <form className="d-flex col-md-4 shadow">
                            <input className="form-control col-xs-12" type="search" value={filter} onChange={handleChangeFilter} placeholder="Search by name" aria-label="Search"/>
                        </form>
                    )
                }
            </div>
       </nav>
	)
}

export default NavBarComponent