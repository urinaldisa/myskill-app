import React from 'react'
import { Div } from 'react-native-magnus'
import StackHeader from '../../src/components/header/stackHeader'
import IEForm from '../../src/form/IEForm'

const IEInput = () => {
  return (
   <Div flex={1} bg='white'>
    <StackHeader label="IE Input"/>
    <IEForm />
   </Div>
  )
}

export default IEInput