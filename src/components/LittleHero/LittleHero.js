import "./LittleHero.scss"


const LittleHero = (props) => {

    return (
        <div className="LittleHero">
            <p>{props.e.name}</p>
            {/* <img src={`${props.dataLittleHero.thumbnail.path}.${props.dataLittleHero.thumbnail.extension}`}></img> */}
        </div>
    )

}


export default LittleHero