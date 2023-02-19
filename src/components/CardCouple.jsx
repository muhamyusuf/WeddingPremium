import React from 'react'

const CardCouple = (props) => {
  return (
    <div className='w-[full] h-[50%] md:h-[70%] flex flex-col flex-1 items-center justify-around rounded-xl font-poppins p-3 bg-opacity-10 backdrop-blur-md drop-shadow-md text-white'>
      <div 
        className='w-[200px] h-[200px] bg-cover bg-top rounded-full'
        style={{ backgroundImage: `url(${props.img})` }}
      >
                
      </div>
      
      <h1 className='font-bold text-[20px]'>{props.name}</h1>

      <div className='inline-block align-baseline'>
        <p className='text-center text-[10px] md:text-[20px]'>{props.desc}</p>
      </div>
    </div>
  )
}

export default CardCouple
