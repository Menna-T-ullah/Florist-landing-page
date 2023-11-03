import React from 'react'

const Card = ({flower}) => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4'>
      <img src={flower.linkImg} className="h-[15rem] w-full object-cover" />
      <div className='p-5 border border-b'>
        <h1 className='truncate'>{flower.title}</h1>
      </div>
      <h3 className='px-5 py-3 text-xl'>{flower.price}</h3>
      <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>{flower.type}</div>
    </div>
  )
}

export default Card
