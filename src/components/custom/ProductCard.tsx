import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image, { StaticImageData } from 'next/image'
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label';

export interface Product {
  id: string,
  name: string,
  image: StaticImageData,
  price: number,
  description: string
}

type PropTypes = { product: Product }


const ProductCard = ({ product }: PropTypes) => {
  return (
    <div>
      <Card className='border-none rounded-xl '>
        <CardHeader className='flex items-center justify-center'>
          <Image src={product.image} alt={product.name} width={150} height={150} className='w-36' />
        </CardHeader>
        <CardContent>
          <h2 className='text-xl font-bold'>{product.name}</h2>
          <p>{product.description}</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <p className=''>
            <span >From </span>
            <span className='font-bold'>Rs{product.price}</span>
          </p>
          <Dialog>
            <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full 
            hover:shadow-lg outline-none focus:outline-none ease-linear  transition-all duration-150">Choose</DialogTrigger>
            <DialogContent className="max-w-3xl p-0">

              <div className='flex '>

                <div className='w-1/3 bg-white rounded p-4 flex items-center justify-center'>
                  <Image src={product.image} alt={product.name} width={150} height={150} className='w-36' />
                </div>
                <div className=' w-2/3 p-8'>
                  <h3 className='text-xl font-bold '>{product.name}</h3>
                  <p className='mt-3 '>{product.description}</p>

                  <div>
                    <h4 className="mt-6">Choose the size</h4>
                    <RadioGroup
                      defaultValue="small"
                      className="grid grid-cols-3 gap-4 mt-2">
                      <div>
                        <RadioGroupItem
                          value="small"
                          id="small"
                          className="peer sr-only"
                          aria-label="Small"
                        />
                        <Label
                          htmlFor="small"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          Small
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="medium"
                          id="medium"
                          className="peer sr-only"
                          aria-label="Medium"
                        />
                        <Label
                          htmlFor="medium"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          Medium
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="large"
                          id="large"
                          className="peer sr-only"
                          aria-label="Large"
                        />
                        <Label
                          htmlFor="large"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          Large
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <h4 className="mt-6">Choose the crust</h4>
                    <RadioGroup
                      defaultValue="thin"
                      className="grid grid-cols-3 gap-4 mt-2">
                      <div>
                        <RadioGroupItem
                          value="thin"
                          id="thin"
                          className="peer sr-only"
                          aria-label="Thin"
                        />
                        <Label
                          htmlFor="thin"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          Thin
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem
                          value="thick"
                          id="thick"
                          className="peer sr-only"
                          aria-label="Thick"
                        />
                        <Label
                          htmlFor="thick"
                          className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          Thick
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>




                </div>
              </div>

            </DialogContent>
          </Dialog>

          {/* <Button className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full 
    hover:shadow-lg outline-none focus:outline-none ease-linear  transition-all duration-150">Choose</Button> */}
        </CardFooter>
      </Card>

    </div>
  )
}

export default ProductCard