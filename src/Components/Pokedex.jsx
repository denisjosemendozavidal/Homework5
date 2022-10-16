import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import SelectBytype from './SelectBytype'

const Pokedex = () => {

  const userName = useSelector(state => state.userName)

  const [pokemonlist, setPokemonlist] = useState()
  const [selectedtype, setSelectedtype] = useState("AllTypes") 

  useEffect(() => {

    if (selectedtype !== "AllTypes") {
      axios.get(selectedtype)
        .then(res => console.log(res.data.pokemon))
        .catch(err => console.log(err))
    } else {
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`
    
        axios.get(url)
          .then(res => setPokemonlist(res.data.results))
          .catch(err => console.log(err))

    }
    

  }, [selectedtype])

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }

  

  return (
    <div className='pokedex'>
      <header className='pokedex-header'>
        <h1 className='pokedex-header-title'>Pokedex</h1>
        <p className='pokedex-header-message'>Welcome: <span>{userName}</span>, find your favorite pokemons here.!</p>
        <form onSubmit={submit} className='pokedex-header-input-and-select'>
          <input className='pokedex-header-input' type="text" placeholder='Name your favorite Pokemon here.!' id='search'/>
          <button>Find it.!</button>
          <h3> or try to find it by type:</h3>
          <SelectBytype setSelectedtype={setSelectedtype} selectedtype={selectedtype}/>
        </form>
      </header>
        {
          pokemonlist?.map(pokemon => (
            <PokemonCard key={pokemon.url} pokemon={pokemon} selectedtype={selectedtype}/>
          ))
        }
    </div>
  )
}

export default Pokedex