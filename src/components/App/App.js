import "./App.scss"
import Header from "../Header/Header"
import Main from "../Main/Main"
import { useEffect, useState } from "react"


const App = () => {

    const key = "36d1441902f28ae7cb372fc5245c536e";
    const [data, getData] = useState([])
    const [addToTeam, setAddToTeam] = useState([])




    const InitialsetAddToTeam = (arg) => {

        setAddToTeam(arr => [...arr, arg]
        )
    }

    // const filtered = 





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
            <Main data={data} addToTeam={InitialsetAddToTeam} dataLittleHero={addToTeam} />
        </div>
    )
}


export default App