import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Div, ScrollDiv, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import Headers from '../../src/components/header'
import TimeStudyList from '../../src/components/timeStudyList'
import { COLOR_PRIMARY } from '../../src/helper/theme'

const Homescreen = () => {
    const router = useRouter()
    return (
        <ScrollDiv flex={1} bg='white'>
            <Div position='absolute' bg={COLOR_PRIMARY} w={widthPercentageToDP(100)} h={heightPercentageToDP(26)} />
            <SafeAreaView>
                <Headers />
                <Div p={20}>
                    <Text fontSize={14} fontWeight='600' color={COLOR_PRIMARY}>Hi, apa yang akan anda lakukan hari ini ?</Text>
                    <Div mt={20} justifyContent='space-between' row>
                    <Button onPress={() => router.push('/Main/IEInput')} bg='#fdf6d0' py={20} w={widthPercentageToDP(40)}>
                        <Text>IEE INPUT</Text>
                    </Button>
                    <Button bg='#afe1c9'  py={20} w={widthPercentageToDP(40)}>
                        <Text>Maintenance</Text>
                    </Button>
                    </Div>
                </Div>
                <TimeStudyList />
            </SafeAreaView>
        </ScrollDiv>
    )
}

export default Homescreen