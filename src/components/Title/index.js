import './Title.css'

const Title = (props)=>{
    return(
        <section className='title'>
            <h1>{props.title}</h1>
        </section>
    )
}

export default Title