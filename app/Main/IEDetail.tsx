import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { FlatList, TextInput } from 'react-native';
import { Div, Input, Text } from 'react-native-magnus';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useGetIEDetails } from '../../src/api/IEModule/useGetIEDetail';
import StackHeader from '../../src/components/header/stackHeader';
import DataIEOperator from '../../src/components/IEOperatorDetail/DataIEOperator';

const IEDetail = () => {
  const { id } = useLocalSearchParams();
  const { data: statData, isLoading, isFetching, refetch } = useGetIEDetails(id);
console.log(statData,'ehe')
  const renderItem = ({item}:any) => (
    <Div p={20} bg='#F4FAFF'>
    <Div row justifyContent='space-between' borderBottomWidth={0.5} borderColor='#c4c4c4' >
      <Div mb={10}>
        <Text mb={5}>TIMER</Text>
        <Text fontWeight='600'>{item?.duration}</Text>
      </Div>
      <Div row mb={10}>
        <Input editable={false} selectTextOnFocus={false} value={item?.qty} defaultValue={item?.qty?.toString()} keyboardType='numeric' prefix={(
          <Div pr={5} borderColor='#c4c4c4' borderRightWidth={1}>
            <Text>Qty</Text>
          </Div>
        )} minW={widthPercentageToDP(30)} />
      </Div>
    </Div>
  </Div>
  )
  return (
    <Div flex={1} bg='white'>
      <StackHeader label="Time Study Detail" />
      <Div row alignItems='center'>
      </Div>
        <DataIEOperator data={statData?.data} />
        <FlatList data={statData?.data?.transaction_cycle_times} renderItem={renderItem}/>
    </Div>
  )
}

export default IEDetail