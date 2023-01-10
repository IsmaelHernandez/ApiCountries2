import React from 'react'

const CardCountries = ({country}) => {
  return (
    <div className='card'>
      <img src={country.flags.svg} alt="" />
      <h3 className='card__title'>{country.name.common}</h3>
    </div>
  )
}

export default CardCountries