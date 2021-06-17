import "./LittleHero.scss"


const LittleHero = (props) => {

    return (


        <div className="LittleHero">
            <img src={`${props.e.thumbnail.path}.${props.e.thumbnail.extension}`}></img>
            <p>{props.e.name}</p>

        </div>

    )

}


export default LittleHero