import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pokedexid = () => {

  const {id} = useParams()

  const [poke, setPoke] = useState()

  const idlower = id.toLowerCase()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idlower}/`
    axios.get(url)
      .then(res => setPoke(res.data))
      .catch(err => console.log(err))

  }, [])

  console.log(idlower);
  
  return (
    <article>
      <img src={poke?.sprites.other.dream_world.front_default} alt="" />

    </article>
  )
}

export default Pokedexid