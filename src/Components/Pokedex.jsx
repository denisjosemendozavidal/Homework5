import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'

const Pokedex = () => {

  const userName = useSelector(state => state.userName)

  const [pokemonlist, setPokemonlist] = useState()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`

    axios.get(url)
      .then(res => setPokemonlist(res.data.results))
      .catch(err => console.log(err))

  }, [])

  
  return (
    <div className='pokedex'>
      <header className='pokedex-header'>
        <h1 className='pokedex-header-title'>Pokedex</h1>
        <p className='pokedex-header-message'>Welcome: <span>{userName}</span>, find your favorite pokemons here.!</p>
        <form className='pokedex-header-input-and-select'>
          <input className='pokedex-header-input' type="text" placeholder='Name your favorite Pokemon here.!' />
          <h3> or </h3>
          <input className='pokedex-header-select' type="text" placeholder='' />
        </form>
      </header>
        {
          pokemonlist?.map(pokemon => (
            <PokemonCard pokemon={pokemon}/>
          ))
        }
    </div>
  )
}

export default Pokedex