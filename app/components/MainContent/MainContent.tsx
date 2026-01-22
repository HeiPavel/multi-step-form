'use client'

import { useContext } from 'react'
import { StepContext } from '../Context/CurrentStepContext'
import { Form } from '../Form/Form'

export function MainContent() {
  const {isFormSubmited} = useContext(StepContext)

  return (
    <>
      {isFormSubmited ? <p>Thanks</p> : <Form/>}
    </>
  )
}