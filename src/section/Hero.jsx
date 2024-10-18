import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

function Hero() {
  const[bigShoeImg,setBigShoeImg]=useState(bigShoe1);
  return (
   <section
    id="home"
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10  p-2  max-container '
    >
           <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Puma</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Step up your style with Puma—quality shoes designed for all-day comfort and effortless movement.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />
<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 font-bold'>
   {statistics.map((stats)=>(
    <div key={stats.label}> 
      <p className='text-4xl font-palanquin'>{stats.value} </p>
      <p className=' leading-7 font-montserrat text-slate-gray'>{stats.label}</p>
      </div>
   ))}
</div>
     </div>

     <div className='  relative flex-1 flex justify-center items-center xl:min-h-screen max:xl-py-40  bg-primary bg-hero bg-cover bg-center'>
     <img src={bigShoeImg} alt="shoe collection " srcset="" 
     width={610}
     height={500}
     className='object-contain relative  z-10  '
      />
     </div>

     <div className='flex sm:gap-6 gap-4 absolute sm:-bottom-[7%] -bottom-[67%] sm:right-[10%] right-[5%] max-sm:px-6 border-red-600'>
  {shoes.map((shoe) => (
    <div key={shoe}>
      <ShoeCard 
        imgURL={shoe}
        changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
        bigShoeImg={bigShoeImg}
      />
    </div>
  ))}
</div>


   

   </section>
  )
}

export default Hero