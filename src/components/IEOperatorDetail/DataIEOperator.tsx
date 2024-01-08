import React from 'react'
import { Div, Text } from 'react-native-magnus'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { COLOR_PRIMARY } from '../../helper/theme'

const DataIEOperator = ({data}:any) => {
    console.log(data,'ehe')
  return (
    <Div p={20} bg='white'>
    <Text mb={10} fontSize={14} fontWeight='500'>Operator </Text>
  <Text mb={10} fontSize={14} color='#929292'>{data?.operator?.name} </Text>
  <Div row justifyContent='space-between'>
    <Div w={widthPercentageToDP(40)}>
      <Text mb={10} fontSize={14} fontWeight='500'>Style </Text>
      <Text mb={10} fontSize={14} color='#929292'>style</Text>
    </Div>
    <Div w={widthPercentageToDP(40)}>
      <Text mb={10} fontSize={14} fontWeight='500'>Process </Text>
      <Text mb={10} fontSize={14} color='#929292'>proses</Text>
    </Div>
  </Div>

  <Div row justifyContent='space-between'>
    <Div w={widthPercentageToDP(40)}>
      <Text mb={10} fontSize={14} fontWeight='500'>IE Rating </Text>
      <Text mb={10} fontSize={14} color='#929292'>rating</Text>
    </Div>
    <Div w={widthPercentageToDP(40)}>
      <Text mb={10} fontSize={14} fontWeight='500'>Allowance(%) </Text>
      <Text mb={10} fontSize={14} color='#929292'>allowance</Text>
    </Div>
  </Div>

  <Div row justifyContent='space-between'>
    <Div w={widthPercentageToDP(40)}>
      <Text mb={10} fontSize={14} fontWeight='500'>Average </Text>
      <Text mb={10} fontSize={26} fontWeight='700' color={COLOR_PRIMARY}>formattedDuration</Text>
    </Div>
    <Div w={widthPercentageToDP(40)}>
      <Text mb={10} fontSize={14} fontWeight='500'>Time Result</Text>
      <Text mb={10} fontSize={26} fontWeight='700' color={COLOR_PRIMARY}>resultTime</Text>
    </Div>
  </Div>
</Div>
  )
}

export default DataIEOperator