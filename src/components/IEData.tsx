import React from 'react'
import { Div, Text } from 'react-native-magnus'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { COLOR_PRIMARY } from '../helper/theme'

const IEData = () => {
  return (
   <Div p={20} >
          <Text mb={10} fontSize={14} fontWeight='500'>Operator </Text>
        <Text mb={10} fontSize={14} color='#929292'>Aris Sudaryanto </Text>
        <Div row justifyContent='space-between'>
          <Div w={widthPercentageToDP(40)}>
            <Text mb={10} fontSize={14} fontWeight='500'>Style </Text>
            <Text mb={10} fontSize={14} color='#929292'>Coppa 17s</Text>
          </Div>
          <Div w={widthPercentageToDP(40)}>
            <Text mb={10} fontSize={14} fontWeight='500'>Process </Text>
            <Text mb={10} fontSize={14} color='#929292'>CUTTING CP LAT LINING (CUTTING BEAM)</Text>
          </Div>
        </Div>

        <Div row justifyContent='space-between'>
          <Div w={widthPercentageToDP(40)}>
            <Text mb={10} fontSize={14} fontWeight='500'>IE Rating </Text>
            <Text mb={10} fontSize={14} color='#929292'>100</Text>
          </Div>
          <Div w={widthPercentageToDP(40)}>
            <Text mb={10} fontSize={14} fontWeight='500'>Allowance(%) </Text>
            <Text mb={10} fontSize={14} color='#929292'>10</Text>
          </Div>
        </Div>

        <Div row justifyContent='space-between'>
          <Div w={widthPercentageToDP(40)}>
            <Text mb={10} fontSize={14} fontWeight='500'>Average </Text>
            <Text mb={10} fontSize={26} fontWeight='700' color={COLOR_PRIMARY}>1.93</Text>
          </Div>
          <Div w={widthPercentageToDP(40)}>
            <Text mb={10} fontSize={14} fontWeight='500'>Time Result</Text>
            <Text mb={10} fontSize={26} fontWeight='700' color={COLOR_PRIMARY}>1.03</Text>
          </Div>
        </Div>
   </Div>
  )
}

export default IEData