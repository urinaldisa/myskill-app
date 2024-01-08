import moment from 'moment'
import React from 'react'
import { FlatList } from 'react-native'
import { Div, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import useGetIEList from '../../src/api/IEModule/useGetIEList'
import StackHeader from '../../src/components/header/stackHeader'
import { dataFromPaginated } from '../../src/helper/pagination'

const IEListScreen = () => {
    const { data, refetch, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetIEList({});
    const paginatedData = dataFromPaginated(data)
    const renderItem = ({ item }: any) => {
        return (
            <Div rounded={10} justifyContent='space-between' alignItems='center' p={15} row w={widthPercentageToDP(90)} my={10} alignSelf='center' minH={heightPercentageToDP(10)} bg='#E3E9FC'>
                <Div w={widthPercentageToDP(40)}>
                    <Text fontSize={16} fontWeight='500'>{item?.operator?.name}</Text>
                    <Text>{item?.process?.name}</Text>
                </Div>
                <Div w={widthPercentageToDP(40)}>
                    <Text textAlign='right' fontSize={16} fontWeight='500'>{item.result}</Text>
                    <Text textAlign='right'>Captured on {moment(item?.created_at).format("DD MMM HH:mm")}</Text>
                </Div>
            </Div>
        )
    }
    return (
        <Div flex={1} bg='white'>
            <StackHeader label="IE List" />
            <FlatList
                data={paginatedData}
                renderItem={renderItem}
                keyExtractor={(_, idx: number) => idx.toString()}
                onEndReached={() => {
                    if (hasNextPage && !isFetchingNextPage) {
                        fetchNextPage();
                    }
                }}
                onEndReachedThreshold={0.1}
            />
        </Div>
    )
}

export default IEListScreen