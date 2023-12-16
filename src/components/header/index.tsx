import React from 'react'
import { Div, Icon, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Pressable } from 'react-native'
import { COLOR_PRIMARY } from '../../helper/theme'
import { useRouter } from 'expo-router'
import { useAuth } from '../../providers/Auth'
import { useGetProfile } from '../../api/Auth/useGetProfile'

const Headers = () => {
    const router = useRouter()
    const {profile} = useAuth()
    const { data: statData, isLoading, isFetching, refetch } = useGetProfile({});
    return (
        <>
            <Div minH={heightPercentageToDP(10)} mx={20} row alignItems='center' justifyContent='space-between'>
                <Div row alignItems='center'>
                    <Div mr={10} w={40} h={40} rounded={20} bg='white' />
                    <Div>
                        <Text fontSize={16} color='white'>Welcome</Text>
                        <Text fontSize={16} fontWeight='bold' color='white'>{profile.value.name}</Text>
                    </Div>
                </Div>
                <Pressable onPress={() => router.push('/Main/Profile')}>
                    <Icon
                        rounded="circle"
                        bg="primary"
                        p={10}
                        name="edit"
                        color="white"
                        fontSize={20}
                        fontFamily="FontAwesome5"
                    />
                </Pressable>
            </Div>
            <Div px={20} row alignItems='center' style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.20,
                shadowRadius: 1.41,
                elevation: 2,
            }} mt={heightPercentageToDP(5)} rounded={10} alignSelf='center' w={widthPercentageToDP(90)} h={heightPercentageToDP(10)} bg='white'>
                <Icon
                    rounded="circle"
                    bg="primary"
                    p={10}
                    name="stopwatch"
                    color={COLOR_PRIMARY}
                    fontSize={30}
                    fontFamily="Entypo"
                />
                <Div>
                    <Text>Your Stats</Text>
                    <Text fontWeight='bold' color={COLOR_PRIMARY} fontSize={16}>{statData?.data?.statistics?.total_transaction} Time Study</Text>

                </Div>
            </Div>
        </>
    )
}

export default Headers