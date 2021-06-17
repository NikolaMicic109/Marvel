import "./HeroCard.scss"


const HeroCard = (props) => {


    const addToTeam = () => {
        // console.log(props.data)
        props.addToTeam(props.data)
    }

    return (
        <div className="HeroCard">
            <p>{props.data.name}</p>
            <img src={`${props.data.thumbnail.path}.${props.data.thumbnail.extension}`} />
            <button >Info</button>
            <button onClick={addToTeam}>Add</button>
        </div>
    )
}


export default HeroCard