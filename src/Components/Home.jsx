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
    <article className='home-container'>
      <div className='home'>
        <form onSubmit={handleSubmit}>
          <input type="text" id='UserName' placeholder='What is your name trainer?'/>
          <button>Continue...</button>
        </form>
      </div>
    </article>
  )
}

export default Home