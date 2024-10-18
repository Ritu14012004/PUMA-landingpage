import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

function SuperQuality() {
  return (
  <section id='about-us' 
  className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
  >
    <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>We Provide You 
            <span className='text-coral-red'>Super <br></br> Quality Shoes</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Our footwear redefines comfort and style, offering a seamless blend of quality, innovation, and elegance. Crafted to perfection, each pair promises to elevate your daily experience.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
            <button className='bg-coral-red rounded-3xl p-2 px-2 text-white'>View-details</button>
        </div>
    </div>
<div>
    <img src={shoe8} alt="productdetails" srcset=""
     width={570}
     height={522}
     className='object-contain' />
</div>

  </section>
  )
}

export default SuperQuality