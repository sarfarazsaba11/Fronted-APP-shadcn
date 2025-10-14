import React from 'react'
import { Button } from '../ui/button'
import Pizza from "../../../public/pizza-main.png"
import Image from "next/image"
import { Tabs, TabsTrigger, TabsContent, TabsList } from '../ui/tabs'
import ProductCard, { Product } from './ProductCard'
import Pinacolda from "../../../public/pinacolda.jpg"


const Hero = () => {

const products:Product[] = [
   {
    id:'1',
    name:'Margarita Pizza',
    image:Pizza,
    price:300,
    description:"Taste that will you will remember for ever"
},
   {
    id:'2',
    name:'Margarita Pizza',
    image:Pizza,
    price:600,
    description:"Taste that will you will remember for ever"
},
   {
    id:'3',
    name:'Margarita Pizza',
    image:Pizza,
    price:400,
    description:"Taste that will you will remember for ever"
},
   {
    id:'4',
    name:'Margarita Pizza',
    image:Pizza,
    price:500,
    description:"Taste that will you will remember for ever"
},
 
  

]


const beverages:Product[] = [
   {
    id:'1',
    name:'Pinacolada',
    image:Pinacolda,
    price:300,
    description:"Taste that will you will remember for ever"
},
   {
    id:'2',
    name:'Margarita Pizza',
    image:Pinacolda,
    price:600,
    description:"Taste that will you will remember for ever"
},
   {
    id:'3',
    name:'Margarita Pizza',
   image:Pinacolda,
    price:400,
    description:"Taste that will you will remember for ever"
},
   {
    id:'4',
    name:'Margarita Pizza',
    image:Pinacolda,
    price:500,
    description:"Taste that will you will remember for ever"
},
 
  

]



  return (
    <>
      <section className=' bg-white'>
        <div className='flex items-center justify-between py-24 max-w-7xl mx-auto gap-3'>
          {/* Left div */}
          <div className='flex flex-col justify-center max-w-4xl mx-auto '>
            <h1 className='font-bold text-7xl text-foreground mt-10 '>Super Delicious Pizza in <br />
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

      

     <section>
                <div className="max-w-7xl py-12 mx-auto">
                    <Tabs defaultValue="pizza">
                        <TabsList>
                            <TabsTrigger value="pizza" className="text-md">
                                Pizza
                            </TabsTrigger>
                            <TabsTrigger value="beverages" className="text-md">
                                Beverages
                            </TabsTrigger>
                             <TabsTrigger value="test" className="text-md">
                                Test
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="pizza" className='py-6'>
                            <div className="grid grid-cols-4 gap-6 ">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="beverages">
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {beverages.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                         <TabsContent value="test">
                            <div className="flex items-center justify-center gap-6 mt-6">
                                {beverages.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>




    </>


  )
}

export default Hero