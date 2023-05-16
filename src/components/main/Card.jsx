import React from 'react'

const Card = (data) => {
    console.log(data.photographer);
  return (
    <div className='cards'>

    <div className='container'>
    <div className='image-wrap'>
        <img src={data.src.large} alt="" />
    </div>
    <div>
        <h4>{data.photographer}</h4>
    </div>
    </div>

    </div>
  )
}

export default Card
