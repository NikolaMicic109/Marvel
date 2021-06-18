import "./SingleCharacter.scss"


const SingleCharacter = (props) => {

    console.log(props.char)
    return (

        <div className="wrapper">
            <div className="SingleCharacter">

                <div className="img-container">
                    <img src={`${props.char.thumbnail.path}.${props.char.thumbnail.extension}`} alt="" />
                </div>



                <div className="comics-wrapper">
                    <div className="comic-container">
                        {props.char.comics.items.map(e => {
                            return <p>{e.name}</p>
                        })}
                    </div>
                </div>
            </div>

            <div className="text-container">
                <h2>{props.char.name}</h2>
                <p>{props.char.description}</p>
            </div>



        </div>
    )
}


export default SingleCharacter