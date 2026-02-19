'use client'

import { useContext } from 'react'
import { StepContext } from '../Context/CurrentStepContext'
import { Form } from '../Form/Form'
import { Complited } from '../Complited/Complited'

export function MainContent() {
  const {isFormSubmited} = useContext(StepContext)

  return (
    <>
      {isFormSubmited ? <Complited/> : <Form/>}
    </>
  )
}