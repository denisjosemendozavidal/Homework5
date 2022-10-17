import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from './Pokemon404'

const Pokedexid = () => {

  const {id} = useParams()

  const [poke, setPoke] = useState()
  const [notfound, setNotfound] = useState(false)
  const [background, setBackground] = useState()

  const idlower = id.toLowerCase()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idlower}/`
    axios.get(url)
      .then(res => setPoke(res.data))
      .catch(err => {console.log(err)
                    setNotfound(true)
                    })

  }, [])

  if (notfound) {
    return <Pokemon404/>
  }

 


  useEffect(() => {
    if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #FF1E1E, #EFEFEF)`) /*Second one is white*/ 
    } else if (poke?.types[0].type.name === "grass") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "normal") {
      setBackground(`linear-gradient(180deg, #9F8772, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fighting") {
      setBackground(`linear-gradient(180deg, #9E7676, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "shadow") {
      setBackground(`linear-gradient(180deg, #181818, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "unknown") {
      setBackground(`linear-gradient(180deg, #002E94, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fairy") {
      setBackground(`linear-gradient(180deg, #FFCACA, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "dark") {
      setBackground(`linear-gradient(180deg, #181818, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "dragon") {
      setBackground(`linear-gradient(180deg, #FF1E1E, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "ice") {
      setBackground(`linear-gradient(180deg, #3330E4, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "psychic") {
      setBackground(`linear-gradient(180deg, #C47AFF, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "electric") {
      setBackground(`linear-gradient(180deg, #FCE700, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "water") {
      setBackground(`linear-gradient(180deg, #3330E4, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "steel") {
      setBackground(`linear-gradient(180deg, #413F42, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "bug") {
      setBackground(`linear-gradient(180deg, #9F8772, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "ghost") {
      setBackground(`linear-gradient(180deg, #25316D, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "rock") {
      setBackground(`linear-gradient(180deg, #472D2D, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "ground") {
      setBackground(`linear-gradient(180deg, #9F8772, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "poison") {
      setBackground(`linear-gradient(180deg, #3F0071, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "flying") {
      setBackground(`linear-gradient(180deg, #9E7676, #EFEFEF)`)
    }
  }, [poke])

  
  
  return (
    <article className='pokedex-id-wrapper' style={{background: `${background}`}}>
      <div className='pokedex-id-wrapper-name-and-img'>
        <img className='pokedex-id-wrapper-img' src={poke?.sprites.other.dream_world.front_default} alt="" />
        <h1 className='pokedex-id-wrapper-name'>{`${poke?.name}`}</h1>
      </div>
      <div className='pokedex-id-wrapper-id-type-abilities-wrapper'>
        <h4 className='pokedex-id-wrapper-id'>{` id :${poke?.id}`}</h4>
        <div >
          <h4 className='pokedex-id-wrapper-type'>Type</h4>
            {
              poke?.types.map(type => {
                <li>{`${type.type.name}`}</li>
              })
            }
        </div>
        <h4 className='pokedex-id-wrapper-abilities'>Abilities</h4>
        <h4 className='pokedex-id-wrapper-encounters'>Encounters</h4>

      </div>
      <div className='pokedex-id-wrapper-moves-wrapper'>
        {
          poke?.moves.map(move => (
            <li key={move.move.name}>{move.move.name}</li>
          ))
        }
      </div>
      
    </article>
  )
}

export default Pokedexid