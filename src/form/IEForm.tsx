import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, Div, Icon, Input, ScrollDiv, Text } from 'react-native-magnus'
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
        <ScrollDiv>
            <Div p={15} flex={1} bg='white'>
                <OperatorPicker
                    value={operator}
                    onSelect={(value) => setOperator(value)}
                />
                <StylePicker
                    value={style}
                    onSelect={(value) => setStyle(value)}
                />
                <ProcessPicker
                    disabled={!style}
                    value={process}
                    onSelect={(value) => setProcess(value)} styleId={style} />
                <Div row justifyContent='space-between' mt={15}>
                    <Div>
                        <Text mb={10} fontWeight='500'>Rating</Text>
                        <Input keyboardType='numeric' placeholder='Input Rating' mb={20} w={widthPercentageToDP(45)} />
                    </Div>
                    <Div>
                        <Text mb={10} fontWeight='500'>Allowance</Text>
                        <Input keyboardType='number-pad' placeholder='Input Allowance' mb={20} w={widthPercentageToDP(45)} />
                    </Div>
                </Div>
                <Text mb={10} fontWeight='500'>Date</Text>
                <Datepicker placeholder='Select Date' onSelect={(e) => console.log(e)} value={''} />
            </Div>
            <Button onPress={() => router.push('/Main/IEmain')} mb={heightPercentageToDP(5)} bg='#429669' w={'90%'} alignSelf='center'>
                Next
            </Button>
        </ScrollDiv>
    )
}

export default IEForm