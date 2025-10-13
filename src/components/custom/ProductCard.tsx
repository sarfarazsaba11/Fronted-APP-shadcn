import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image,{StaticImageData}from 'next/image'
import {Button} from "../ui/button"

export interface Product {
    id:string,
    name:string,
    image:StaticImageData,
    price:number,
    description:string
}

type PropTypes = {product:Product}


const ProductCard = ({product}:PropTypes) => {
  return (
   <div>
    <Card className='border-none rounded-xl '>
  <CardHeader className='flex items-center justify-center'>
    <Image src={product.image} alt={product.name} width={150} height ={150}  className='w-36'/>
  </CardHeader>
  <CardContent>
    <h2 className='text-xl font-bold'>{product.name }</h2>
    <p>{product.description}</p>
  </CardContent>
  <CardFooter className='flex justify-between'>
    <p className=''>
        <span >From </span>
        <span className='font-bold'>Rs{product.price}</span>
    </p>
    <Button className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full 
    hover:shadow-lg outline-none focus:outline-none ease-linear  transition-all duration-150">Choose</Button>
  </CardFooter>
</Card>
     
   </div>
  )
}

export default ProductCard