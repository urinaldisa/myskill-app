import React from 'react'
import { Div, Text } from 'react-native-magnus'
import { FlatList } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import useGetIEList from '../../api/IEModule/useGetIEList'
import moment from 'moment'
import formatDuration from '../../helper/timeFormatter'

const TimeStudyList = () => {
    const { data, refetch, isLoading } = useGetIEList({});
    const dataList = data?.pages.flatMap((page) => page.data);

    console.log(dataList)
    const renderItem = ({item}:any) => {
    return (
        <Div rounded={10} justifyContent='space-between' alignItems='center' px={15} row w={widthPercentageToDP(90)} mb={10} alignSelf='center' h={heightPercentageToDP(10)} bg='#E3E9FC'>
            <Div w={widthPercentageToDP(40)}>
            <Text fontSize={16} fontWeight='500'>{item?.operator?.name}</Text>
            <Text>{item?.process?.name}</Text>
            </Div>
            <Div  w={widthPercentageToDP(40)}>
            <Text textAlign='right' fontSize={16} fontWeight='500'>{item.result}</Text>
            <Text textAlign='right'>Captured on {moment(item?.created_at).format("DD MMM HH:mm")}</Text>
            </Div>
        </Div>
    )}
    const headerComponent = () => (
        <Div mb={20} row px={20} justifyContent='space-between'>
            <Text fontWeight='600'>Latest Time Study</Text>
            <Text color='grey'>See All</Text>
        </Div>
    )
  return (
   <Div mt={10}>
    <FlatList ListHeaderComponent={headerComponent} data={dataList} renderItem={renderItem}/>
   </Div>
  )
}

export default TimeStudyList