import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserNameGlobal } from '../store/slices/UserName.slice';

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserNameGlobal(e.target.UserName.value.trim()));
    navigate('/pokedex');
  }

  return (
    <div className='home'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="UserName">Your name: </label>
      <input type="text" id='UserName'/>
      <button>Continue</button>
    </form>
      
    </div>
  )
}

export default Home