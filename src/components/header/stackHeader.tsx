import React from 'react'
import { Div, Text } from 'react-native-magnus'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOR_PRIMARY } from '../../helper/theme'

const StackHeader = ({label}:any) => {
    return (
        <Div bg={COLOR_PRIMARY} minH={heightPercentageToDP(12)}>
            <SafeAreaView>
                <Div mt={heightPercentageToDP(2)} alignItems='center'>
                <Text color='white' fontSize={18} fontWeight='600'>{label}</Text>
                </Div>
            </SafeAreaView>
        </Div>
    )
}

export default StackHeader