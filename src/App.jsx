import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './section/Hero'
import PopularProduct from './section/PopularProduct'
import SuperQuality from './section/SuperQuality'
import Service from './section/Service'
import SpecialOffer from './section/SpecialOffer'
import CustomerReviews from './section/CustomberReview'
import Subscribe from './section/Suscribe'
import Footer from './section/Footer'




function App() {
  

  return (
    <>
   <main className=''>

  <Nav />

<section className="xl:padding-l wide:padding-r padding-b">
  <Hero />
</section>
<section className='padding'>
        <PopularProduct />
      </section>
<section className='padding'>
  <SuperQuality />
</section>
<section className='padding-x py-10'>
   <Service />
</section>
<section className='padding'>
   <SpecialOffer />
</section>
<section className='bg-pale-blue padding'>
  <CustomerReviews />
</section>
<section className='padding-x sm:py-32 py-16 w-full'>
   <Subscribe />
</section>
<section className='bg-black padding-x padding-t pb-8'>
  <Footer />
</section>
   </main>
    </>
  )
}

export default App
