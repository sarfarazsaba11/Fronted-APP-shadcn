import React from 'react'
import { Button } from '../ui/button'
import Pizza from "../../../public/pizza-main.png"
import Image from "next/image"

const Hero = () => {


  return (
    <>
   <section className=' bg-white'>
    <div className='flex items-center justify-between py-24 max-w-7xl mx-auto gap-3'>
        {/* Left div */}
        <div className='flex flex-col justify-center max-w-4xl mx-auto '>
            <h1 className='font-bold text-7xl text-foreground mt-10 '>Super Delicious Pizza in <br/>
            <span className='text-primary' >Only 45 minutes !</span> </h1>
            
            <p className='mt-8 text-2xl leading-snug max-w-lg'>Enjoy a Free Meal if Your Order Takes More Than 45 minutes</p>
            
            {/* flex is forcing button to bigger size */}
            <div>

              <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold" size={'sm'}>Get your pizza now </Button>
            </div>



        </div >
        {/* Right div */}
        <div className='flex items-center justify-center'>
            <Image src={Pizza} alt='hero pizza image ' width={400} height={400} className="w-80 h-80
            "/>

        </div>
    </div>
   </section>
   



</>


  )
}

export default Hero