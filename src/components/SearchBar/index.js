import './SearchBar.css'
import {AiOutlineSearch} from 'react-icons/ai'
const SearchBar = (props)=>{
    return(
        <div className='searchBar'>
            <input onChange={props.onChange}placeholder={props.placeholder}></input>
            <AiOutlineSearch onClick={props.onClick} size={25} className='searchIcon'/>
        </div>
    )
}

export default SearchBar