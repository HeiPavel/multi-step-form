'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { useFormFieldValue } from '@/app/hooks/useFormFieldValue'
import { InputSwitch } from 'primereact/inputswitch'
import { SwitchLabel } from './SwitchLabel'
import { UserData } from '@/app/util/schema'

export const isAnnuallyFieldName = 'isAnnually'

export function SwitchInput() {
  const {control} = useFormContext<UserData>()
  const [isAnnually] = useFormFieldValue([isAnnuallyFieldName])

  return (
    <div className='flex items-center gap-6'>
      <SwitchLabel
        isActive={!isAnnually}
        text='monthly'
      />
      <Controller
        control={control}
        name={isAnnuallyFieldName}
        render={({field}) => (
          <InputSwitch
            inputId={field.name}
            checked={field.value}
            onChange={(event) => field.onChange(event.value)}
          />
        )}
      />
      <SwitchLabel
        isActive={isAnnually}
        text='yearly'
      />
    </div>
  )
}