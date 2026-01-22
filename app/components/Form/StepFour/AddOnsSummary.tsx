import { AddOnsItem } from './AddOnsItem'
import { checkboxTextData } from '../StepThree'
import { addPrice, UserData } from '@/app/util/schema'
import { twJoin } from 'tailwind-merge'

export function AddOnsSummary({addOns}: {addOns: UserData['add']}) {
  return (
    <div className={twJoin(
      'mt-5 pt-5 tablet:mt-6 tablet:pt-6',
      'border-t border-t-grey-light',
      'flex flex-col gap-4 tablet:gap-5'
    )}>
      {
        addOns.map((serviceName) => (
          <AddOnsItem
            key={serviceName}
            title={checkboxTextData[serviceName].title}
            price={addPrice[serviceName]}
          />
        ))
      }
    </div>
  )
}