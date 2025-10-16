"use client"
import React, { useState } from 'react'
import ToppingCard, { Topping } from './toppingCard';
import Chicken from "../../../public/chicken.png"
import Jalepeno from "../../../public/jelapeno.png"
import Cheese from "../../../public/cheese.png"

const ToppingList = () => {
   
const toppings = [
    { id: '1', name: 'Chicken', image: Chicken, price: 50, isAvailable: true },
    { id: '2', name: 'jelapeno', image: Jalepeno, price: 50, isAvailable: true },
    { id: '3', name: 'Cheese', image: Cheese, price: 50, isAvailable: true },
];


    const [selectedToppings,setSelectedToppings] =useState([toppings[0]])
    const handleCheckBoxCheck = (topping:Topping) => {
        const isAlreadySelected = selectedToppings.some((elem)=> elem.id === topping.id)

        if(isAlreadySelected){
            setSelectedToppings((prev)=> prev.filter(elem => elem.id !== topping.id))
            return
        }


        setSelectedToppings((prev)=>[...prev ,topping])



    }



  return (
   <section className='mt-6'>
        <h3>Extra Topping</h3>
        <div className='grid grid-cols-3 mt-3 gap-4'>
            {
                toppings.map(( topping )=> {
                    return (
                        <ToppingCard key={topping.id} topping={topping} selectedToppings={selectedToppings} handleCheckBoxCheck={handleCheckBoxCheck} />
                    )
                })
            }
        </div>

   </section>
  )
}

export default ToppingList