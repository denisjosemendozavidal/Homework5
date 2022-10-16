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
    <article>
      <img src={poke?.sprites.other.dream_world.front_default} alt="" />
      <h1>{`${poke?.name}`}</h1>
    </article>
  )
}

export default Pokedexid