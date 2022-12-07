import './Button.css'

const Button = (props)=>{
    return(
        <section className='button'>
            <button onClick={props.onClick} style={{backgroundColor:props.backgroundColor, color:props.textColor, borderColor:props.borderColor, padding:props.padding}}>{props.children}</button>
        </section>
    )
}

export default Button