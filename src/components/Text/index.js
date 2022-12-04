import './Text.css'

const Text = (props)=>{
    return(
        <section className='text'>
            <p>{props.text}</p>
        </section>
    )
}

export default Text