import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from './Pokemon404'

const Pokedexid = () => {

  const {id} = useParams()

  const [poke, setPoke] = useState()
  const [notfound, setNotfound] = useState(false)

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

  
  
  return (
    <article className='pokedex-id-wrapper'>
      <img className='pokedex-id-wrapper-img' src={poke?.sprites.other.dream_world.front_default} alt="" />
      <h1 className='pokedex-id-wrapper-name'>{`${poke?.name}`}</h1>
      <h4 className='pokedex-id-wrapper-id'>id</h4>
      <h4 className='pokedex-id-wrapper-type'>Type</h4>
      <h4 className='pokedex-id-wrapper-abilities'>Abilities</h4>
      <h4 className='pokedex-id-wrapper-encounters'>Encounters</h4>
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