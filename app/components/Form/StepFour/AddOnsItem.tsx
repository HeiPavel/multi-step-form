import { Price } from '../../Inputs/Price'

type AddOnsItemProps = {
  title: string
  price: number
}

export function  AddOnsItem({title, price}: AddOnsItemProps) {
  return (
    <div className='flex justify-between items-center'>
      <p className='text-sm leading-3.5 tablet:text-base tablet:leading-4 text-grey'>
        {title}
      </p>
      <Price
        price={price}
        color='black'
        textSize='base'
        isPlusSign={true}
      />
    </div>
  )
}