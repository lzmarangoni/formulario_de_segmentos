import './Title.css'

const Title = (props)=>{
    return(
        <section className='title'>
            <h1 style={props.style}>{props.title}</h1>
        </section>
    )
}

export default Title