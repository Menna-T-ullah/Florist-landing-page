import React from 'react'
import comp1 from "../assets/comp-1.png"
import comp2 from "../assets/comp-2.png"
import comp3 from "../assets/comp-3.png"
import comp4 from "../assets/comp-4.png"

const Companies = () => {
  return (
    <div className="w-full bg-white py-[50px] px-10">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] gap-20 md:gap-80">
        <h1 className="text-center text-2xl font-bold">Trusted by over 30,000 teams around the world.</h1>
        <p className='text-center text-gray-700'>Leading companies to love flowers to stay fresh environment </p>
        </div>
        <div className='flex justify-center py-8 gap-8'>
            <img className='w-20 h-20' src={comp1} />
            <img className='w-20 h-20' src={comp2} />
            <img className='w-20 h-20' src={comp3} />
            <img className='w-20 h-20' src={comp4} />
        </div>
    </div>
  )
}

export default Companies
