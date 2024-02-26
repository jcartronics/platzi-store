import { ChevronRightIcon } from '@heroicons/react/24/solid'

export const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

  return (
    <div className='flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4'>
        <div className='flex justify-between w-full'>
          <p className='flex flex-col'>
            <span>01.02.23</span> 
            <span className='font-light'>{totalProducts} articles</span> 
          </p>
          <p className='flex gap-2 items-center'>
            <span className='font-medium text-2xl'>${totalPrice}</span> 
            <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
          </p>
        </div>
    </div>
  )
}
