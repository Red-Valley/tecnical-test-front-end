import React, {useState, useEffect} from 'react'
import './Search.css'
import { searchCharacter } from '../../actions/charactersActions'
import { useSelector, useDispatch } from 'react-redux'
const Search = () => {
    const [search, setSearch] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=> {
        if(search.length > 3) {
            dispatch(searchCharacter(search))
        }
    }, [search])
    
    return (
        <div className="input__search">
            <input type="text" 
             placeholder="Search character"
             onChange={(e) => setSearch(e.target.value)}
             />
             <div className="input__search--icon">
             <ion-icon name="search-sharp"></ion-icon>
             </div>
        </div>
    )
}

export default Search
