import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, Div, Icon, Input, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Datepicker from '../components/datepicker'
import OperatorPicker from '../components/OperatorPicker'
import ProcessPicker from '../components/ProcessPicker'
import StylePicker from '../components/StylePicker'

const IEForm = () => {
    const router = useRouter()
    const [operator, setOperator] = useState("")
    const [style, setStyle] = useState("")
    const [process, setProcess] = useState("")
    console.warn(operator)
    return (
        <>
            <Div p={15} flex={1} bg='white'>
                <OperatorPicker
                    value={operator}
                    onSelect={(value) => setOperator(value)}
                />
                <StylePicker
                    value={operator}
                    onSelect={(value) => setOperator(value)}
                />
                <ProcessPicker
                    value={operator}
                    onSelect={(value) => setOperator(value)}
                />
                <Div row justifyContent='space-between' mt={15}>
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