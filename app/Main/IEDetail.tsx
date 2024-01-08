import { useLocalSearchParams } from 'expo-router';
import React from 'react'
import { Div, Text } from 'react-native-magnus'
import { useGetIEDetails } from '../../src/api/IEModule/useGetIEDetail';
import StackHeader from '../../src/components/header/stackHeader'
import DataIEOperator from '../../src/components/IEOperatorDetail/DataIEOperator';

const IEDetail = () => {
  const { id } = useLocalSearchParams();
  const { data: statData, isLoading, isFetching, refetch } = useGetIEDetails(id);

  return (
    <Div flex={1} bg='white'>
      <StackHeader label="Time Study Detail" />
      <Div row alignItems='center'>
        <Div mr={10} w={50} h={50} rounded={25} bg='white' />
      </Div>
        <DataIEOperator data={statData} />
    </Div>
  )
}

export default IEDetail