import React from 'react'
import { FlatList, Pressable } from 'react-native'
import { Div, Icon, Input, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import formatDuration from '../helper/timeFormatter'

const CycleList = ({ value, setValue }: any) => {

    const renderItem = ({ item, index }: any) => {
        const { originalDuration, formattedDuration } = formatDuration(item);
        const handleDelete = () => {
            setValue(value.filter((e: number) => e !== item))
        }
        return (
            <Div p={20} bg='#F4FAFF'>
                <Div row justifyContent='space-between' borderBottomWidth={0.5} borderColor='#c4c4c4' >
                    <Div mb={10}>
                        <Text mb={5}>TIME 1</Text>
                        <Text fontWeight='600'>{formattedDuration}</Text>
                    </Div>
                    <Div row mb={10}>
                        <Input defaultValue='1' keyboardType='numeric' prefix={(
                            <Div pr={5} borderColor='#c4c4c4' borderRightWidth={1}>
                                <Text>Qty</Text>
                            </Div>
                        )} minW={widthPercentageToDP(30)} />
                        <Pressable onPress={() => handleDelete()}>
                            <Icon
                                rounded="circle"
                                bg="primary"
                                p={10}
                                name="trash-2"
                                color="red"
                                fontSize={20}
                                fontFamily="Feather"
                            />
                        </Pressable>
                    </Div>
                </Div>
            </Div>
        )
    }
    return (
        <Div mt={heightPercentageToDP(5)}  >
            <Div px={20} >
                <Text fontSize={16} fontWeight='600'>CYCLE TIME</Text>
                <Text mb={10} fontSize={14} color='#929292'>Then start the to calculate your work</Text>
            </Div>
            <FlatList bounces={false} data={value || []} renderItem={renderItem} />
        </Div>
    )
}

export default CycleList