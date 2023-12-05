import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Div, Icon, Input, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Datepicker from '../components/datepicker'

const IEForm = () => {
    const router = useRouter()
    return (
        <>
        <Div p={15} flex={1} bg='white'>
            <Text mb={10} fontWeight='500'>Operator <Text color='red'>*</Text></Text>
            <Input mb={20} placeholder='Aris Sudaryanto' suffix={
                <Icon
                    name="search"
                    fontSize={14}
                    color="gray900"
                    fontFamily="Feather"
                />
            } />
            <Text mb={10} fontWeight='500'>Style <Text color='red'>*</Text></Text>
            <Input placeholder='Find a style' mb={20} suffix={
                <Icon
                    name="search"
                    fontSize={14}
                    color="gray900"
                    fontFamily="Feather"
                />
            } />
            <Text mb={10} fontWeight='500'>Process <Text color='red'>*</Text></Text>
            <Input placeholder='Find a Process' mb={20} suffix={
                <Icon
                    name="search"
                    fontSize={14}
                    color="gray900"
                    fontFamily="Feather"
                />
            } />
            <Div row justifyContent='space-between'>
                <Div>
                    <Text mb={10} fontWeight='500'>Rating</Text>
                    <Input placeholder='Find a Process' mb={20} w={widthPercentageToDP(45)} />
                </Div>
                <Div>
                    <Text mb={10} fontWeight='500'>Allowance</Text>

                    <Input placeholder='Find a Process' mb={20} w={widthPercentageToDP(45)} />
                </Div>
            </Div>
            <Text mb={10} fontWeight='500'>Date</Text>
            <Datepicker placeholder='Select Date' onSelect={(e) => console.log(e)} value={''} />
        </Div>
            <Button onPress={() => router.push('/Main/IEmain')} mb={heightPercentageToDP(5)} bg='#429669' w={'90%'} alignSelf='center'>
                Next 
            </Button>
        </>
    )
}

export default IEForm