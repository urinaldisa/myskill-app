import React from 'react'
import { Div, Text } from 'react-native-magnus'
import { FlatList } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const TimeStudyList = () => {
    const data = [1,2,3,4,5]
    const renderItem = () => (
        <Div rounded={10} justifyContent='space-between' alignItems='center' px={15} row w={widthPercentageToDP(90)} mb={10} alignSelf='center' h={heightPercentageToDP(10)} bg='#E3E9FC'>
            <Div>
            <Text fontSize={16} fontWeight='500'>Aris sudaryanto</Text>
            <Text>CUT9877 - Cutting Beam</Text>
            </Div>
            <Div>
            <Text textAlign='right' fontSize={16} fontWeight='500'>32,03s</Text>
            <Text textAlign='right'>Captured on 18 Aug 17:03</Text>
            </Div>
        </Div>
    )
    const headerComponent = () => (
        <Div mb={20} row px={20} justifyContent='space-between'>
            <Text fontWeight='600'>Latest Time Study</Text>
            <Text color='grey'>See All</Text>
        </Div>
    )
  return (
   <Div mt={10}>
    <FlatList ListHeaderComponent={headerComponent} data={data} renderItem={renderItem}/>
   </Div>
  )
}

export default TimeStudyList