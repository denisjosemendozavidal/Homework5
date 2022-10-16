import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pokemon404 = () => {

    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(`/pokedex`)
    }

  return (
    <div className='notfound'>
        <h1 className='notfound-title'>Pokemon not found</h1>
        <button className='notfound-back-button' onClick={handleReturn}>Do you want to go back?</button>

    </div>
  )
}

export default Pokemon404