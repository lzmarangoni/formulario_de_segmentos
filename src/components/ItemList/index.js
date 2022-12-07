import './ItemList.css'

const ItemList = (props)=>{
    return(
        <div className='itemList'> 
            <li onClick={props.onClick} className='itemList'>{props.children}</li>
        </div>
    )
}

export default ItemList