import "./Main.scss";

import HeroCard from "../HeroCard/HeroCard"
import LittleHero from "../LittleHero/LittleHero"


const Main = (props) => {


    return (
        <div className="Main">
            <div className="hero-card-container">
                {props.data.map(e => {
                    // console.log(e);
                    return < HeroCard data={e} addToTeam={props.addToTeam} />
                })}
            </div>

            <div className="little-hero-container">
                {props.dataLittleHero.map(e => {
                    return <LittleHero dataLittleHero={props.dataLittleHero} e={e} />
                })}

            </div>


        </div>
    )
}


export default Main