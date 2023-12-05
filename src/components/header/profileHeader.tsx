import React from 'react'
import { Div, Icon, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Pressable } from 'react-native'
import { COLOR_PRIMARY } from '../../helper/theme'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileHeaders = () => {
    const router = useRouter()
    return (
        <>
            <Div bg={COLOR_PRIMARY} minH={heightPercentageToDP(20)} p={10} row alignItems='center' justifyContent='space-between'>
                <SafeAreaView>
                <Div row alignItems='center'>
                    <Div mr={10} w={50} h={50} rounded={25} bg='white' />
                    <Div>
                        <Text fontSize={16} fontWeight='bold' color='white'>Aris Sudaryanto</Text>
                        <Text fontSize={14} color='white'>PBD-20192029</Text>
                    </Div>
                </Div>
                </SafeAreaView>
            </Div>
       
        </>
    )
}

export default ProfileHeaders