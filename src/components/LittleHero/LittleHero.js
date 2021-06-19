import "./LittleHero.scss"


const LittleHero = (props) => {


    const removeHero = () => {
        props.removeHero(props.e)

    }

    return (


        <div className="LittleHero">
            <img src={`${props.e.thumbnail.path}.${props.e.thumbnail.extension}`}></img>
            <div className="wrapper">
                <p>{props.e.name}</p>
                <button onClick={removeHero} className="remove">Remove</button>
            </div>


        </div>

    )

}


export default LittleHero