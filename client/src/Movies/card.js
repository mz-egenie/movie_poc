import React from 'react'
import MovieImg from '../assets/movieImg.png'

function Card() {
  return (
    <div className="movie_card">
       <img src={MovieImg} alt="" />
       <p className='movie_name'>Movie 1</p>
       <p className='movie_year'>2021</p>
    </div>
  )
}

export default Card