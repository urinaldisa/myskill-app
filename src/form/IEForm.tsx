import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Button, Div, Input, ScrollDiv, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Datepicker from '../components/datepicker'
import OperatorPicker from '../components/OperatorPicker'
import ProcessPicker from '../components/ProcessPicker'
import StylePicker from '../components/StylePicker'

const IEForm = () => {
    const router = useRouter()
    const [operator, setOperator] = useState<any>(null)
    const [userQR, setUserQR] = useState<any>(null)
    const [style, setStyle] = useState<any>(null)
    const [proses, setProses] = useState<any>(null)
    const [rating, setRating] = useState('100')
    const [allowance, setAllowance] = useState("0")
    const [date, setDate] = useState<any>()
    return (
        <ScrollDiv >
            <Div p={15} flex={1} bg='white'>
                <OperatorPicker
                    value={operator}
                    onSelect={(value) => setOperator(value)}
                    setOperator={setUserQR}
                    userQR={userQR}
                />
                <StylePicker
                    value={style}
                    onSelect={(value) => setStyle(value)}
                />
                <ProcessPicker
                    disabled={!style}
                    value={proses}
                    onSelect={(value) => setProses(value)}
                    styleId={style?.id} />
                <Div row justifyContent='space-between' mt={15}>
                    <Div>
                        <Text mb={10} fontWeight='500'>IE Rating</Text>
                        <Input keyboardType='numeric' value={rating} onChangeText={(e) => setRating(e)} placeholder='Input IE Rating' mb={20} w={widthPercentageToDP(45)} />
                    </Div>
                    <Div>
                        <Text mb={10} fontWeight='500'>Allowance(%)</Text>
                        <Input keyboardType='number-pad' placeholder='Input Allowance' value={allowance} onChangeText={(e) => setAllowance(e)} mb={20} w={widthPercentageToDP(45)} />
                    </Div>
                </Div>
                {/* <Text mb={10} fontWeight='500'>Date</Text> */}
                {/* <Datepicker block placeholder='Select Date' onSelect={(val) => setDate(val)} value={date} /> */}
            </Div>
            <Button disabled={ !!userQR ? false : !operator ? true : !style ? true : !proses ? true : rating === "" ? true : allowance === "" ? true : !date ? true : false} onPress={() => router.push({
                pathname: '/Main/IEmain', params: {
                    operator: userQR?.name || operator?.name,
                    operatorId: userQR?.id || operator?.id,
                    style: style?.name,
                    styleId: style?.id,
                    processId: proses?.id,
                    proses: proses?.process?.name.replace(/[()]/g, ' '),
                    allowance: allowance,
                    rating: rating,
                    date: date
                }
            })} mb={heightPercentageToDP(5)} bg='#429669' w={'90%'} alignSelf='center'>
                Next
            </Button>
        </ScrollDiv>
    )
}

export default IEForm