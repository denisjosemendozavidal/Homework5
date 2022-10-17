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

  /*0
: 

1
: 

2
: 
{name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}
3
: 
{name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/'}
4
: 
{name: 'ground', url: 'https://pokeapi.co/api/v2/type/5/'}
5
: 
{name: 'rock', url: 'https://pokeapi.co/api/v2/type/6/'}
6
: 
{name: 'bug', url: 'https://pokeapi.co/api/v2/type/7/'}
7
: 
{name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/'}
8
: 
{name: 'steel', url: 'https://pokeapi.co/api/v2/type/9/'}
9
: 

10
: 
{name: 'water', url: 'https://pokeapi.co/api/v2/type/11/'}
11
: 

12
: 
{name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/'}
13
: 

14
: 

15
: 

16
: 

17
: 

18
: 

19
: 


*/ 


  useEffect(() => {
    if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #FF1E1E, #EFEFEF)`) /*Second one is white*/ 
    } else if (poke?.types[0].type.name === "grass") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "normal") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fighting") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "shadow") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "unknown") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fairy") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "dark") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "dragon") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "ice") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "psychic") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "electric") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
    } else if (poke?.types[0].type.name === "fire") {
      setBackground(`linear-gradient(180deg, #367E18, #EFEFEF)`)
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