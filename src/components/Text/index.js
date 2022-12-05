import './Text.css'

const Text = (props)=>{
    return(
        <section className='text'>
            <p style={props.style}>{props.text}</p>
        </section>
    )
}

export default Text