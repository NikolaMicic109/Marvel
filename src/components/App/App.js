import "./App.scss"
import Header from "../Header/Header"
import Main from "../Main/Main"
import SingleCharacter from "../SingleCharacter/SingleCharacter"
import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"


const App = () => {

    const key = "36d1441902f28ae7cb372fc5245c536e";
    const [data, getData] = useState([])
    const [addToTeam, setAddToTeam] = useState([])

    const [singleChar, setSingleChar] = useState([])




    const InitialsetAddToTeam = (arg) => {

        setAddToTeam(arr => {
            return !arr.includes(arg) ? [...arr, arg] : [...arr]
        })
    }

    const removeHero =(arg)=>{
       setAddToTeam(addToTeam.filter(e=> e!== arg)) 
    }







    useEffect(() => {
        fetch(` http://gateway.marvel.com/v1/public/characters?apikey=${key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data.results)
                getData(data.data.results)
            })
    }, [])

    return (
        <div className="App">
            <Header />

            {singleChar.length !== 0 ? <SingleCharacter char={singleChar} /> : <Main removeHero={removeHero} data={data} addToTeam={InitialsetAddToTeam} dataLittleHero={addToTeam} sendToSingleChar={setSingleChar} />}


            <Switch>
                <Route />
            </Switch>
        </div>
    )
}


export default App