"use client"

import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'

export interface Topping {
    id: string,
    name:string,
    image: StaticImageData,
    price:number,
    isAvailable:boolean
}
type PropsTypes ={
    topping: Topping,
    selectedToppings:Topping[];
    handleCheckBoxCheck: (topping:Topping) => void
    

}

const ToppingCard = ({topping,selectedToppings,handleCheckBoxCheck}:PropsTypes) => {

    // const [selected, setSelected] = useState('1')
    // ya tab use karenge jab hum child card mein slection logic final  karenge
    const isCurrentSelected = selectedToppings.some ((elem)=>  elem.id === topping.id)
    
  return (
   <Button variant={'outline'} className={cn('flex flex-col h-42 relative',isCurrentSelected ? 'border-primary' : '') } onClick={()=> handleCheckBoxCheck(topping)}>
    <Image src={topping.image} alt={topping.name} width={30} height={30}className='w-20 h-20' />
    <h4 className=''>{topping.name}</h4>
    <p className='text-md'>Rs.{topping.price}</p>
    {
        isCurrentSelected && (
            <CircleCheck  className='absolute top-1 right-1 text-primary'/>
        )
    }
    

   </Button>
  )
}

export default ToppingCard