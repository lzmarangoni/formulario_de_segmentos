import './Banner.css'

const Banner = (props)=>{
    return(
        <header className="header">
            <img src={props.image}/>
        </header>
        )
}

export default Banner;