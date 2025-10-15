'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export interface Topping {
    id: string,
    name:string,
    image: StaticImageData,
    price:number,
    isAvailable:boolean
}
type PropsTypes ={
    topping: Topping,
    selectedTopping
    

}

const ToppingCard = ({topping}:PropsTypes) => {
    const [selected, setSelected] = useState('1')
    const isCurrentSelected = selected === topping.id
    
  return (
   <Button variant={'outline'} className={cn('flex flex-col h-42',isCurrentSelected ? 'border-primary' : '') } onClick={()=> setSelected(topping.id)}>
    <Image src={topping.image} alt={topping.name} width={60} height={60} />
    <h4 className=''>{topping.name}</h4>
    <p className='text-md'>Rs.{topping.price}</p>

   </Button>
  )
}

export default ToppingCard