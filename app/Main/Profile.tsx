import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Div, Icon, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import ProfileHeaders from '../../src/components/header/profileHeader'
import { useAuth } from '../../src/providers/Auth'

const Profile = () => {
    const {onLogout} = useAuth()
    const router = useRouter();

    return (
        <Div flex={1}>
            <ProfileHeaders />
            <Div flex={1} bg='white' roundedTop={16} top={heightPercentageToDP(-2)}>
                <Div mt={heightPercentageToDP(4)} px={20} alignSelf='center'>
                <Text  fontWeight='500' fontSize={16}>Account</Text>
                    <Button
                        borderBottomWidth={1}
                        borderColor='#E8E8E8'
                        rounded={0}
                        bg="white"
                        px={20}
                        prefix={
                            <Icon
                            rounded="circle"
                            bg="primary"
                            p={10}
                            name="lock"
                            color="#667689"
                            fontSize={20}
                            fontFamily="AntDesign"
                        />
                        }
                        suffix={<Icon
                            rounded="circle"
                            bg="primary"
                            p={10}
                            name="chevron-right"
                            color="#667689"
                            fontSize={20}
                            fontFamily="Entypo"
                        />}

                        justifyContent='flex-start'>
                        <Div w={widthPercentageToDP(70)}>
                            <Text color='#4E5F70' fontWeight='500' fontSize={14}> Change PIN</Text>
                        </Div>
                    </Button>
                    <Button
                        bg="white"
                        px={20}
                        prefix={
                            <Icon
                            rounded="circle"
                            bg="primary"
                            p={10}
                            name="settings-outline"
                            color="#667689"
                            fontSize={20}
                            fontFamily="Ionicons"
                        />
                        }
                        suffix={<Icon
                            rounded="circle"
                            bg="primary"
                            p={10}
                            name="chevron-right"
                            color="#667689"
                            fontSize={20}
                            fontFamily="Entypo"
                        />}

                        justifyContent='flex-start'>
                        <Div w={widthPercentageToDP(70)}>
                            <Text color='#4E5F70' fontWeight='500' fontSize={14}>Setup Application</Text>
                        </Div>
                    </Button>
                    <Text  fontWeight='500' my={heightPercentageToDP(4)} fontSize={16}>Other Information</Text>
                    <Button
                        bg="white"
                        borderBottomWidth={1}
                        borderColor='#E8E8E8'
                        rounded={0}
                        px={20}
                        prefix={
                            <Icon
                            rounded="circle"
                            bg="primary"
                            p={10}
                            name="help-circle"
                            color="#667689"
                            fontSize={20}
                            fontFamily="Feather"
                        />
                        }
                        suffix={<Icon
                            rounded="circle"
                            bg="primary"
                            p={10}
                            name="chevron-right"
                            color="#667689"
                            fontSize={20}
                            fontFamily="Entypo"
                        />}

                        justifyContent='flex-start'>
                        <Div w={widthPercentageToDP(70)}>
                            <Text color='#4E5F70' fontWeight='500' fontSize={14}>Help & Resouce</Text>
                        </Div>
                    </Button>
                    <Button
                        bg="white"
                        px={20}
                        prefix={
                            <Icon
                            rounded="circle"
                            bg="primary"
                            p={10}
                            name="like2"
                            color="#667689"
                            fontSize={20}
                            fontFamily="AntDesign"
                        />
                        }
                        suffix={
                       
                            
                                <Icon
                                    rounded="circle"
                                    bg="primary"
                                    p={10}
                                    name="chevron-right"
                                    color="#667689"
                                    fontSize={20}
                                    fontFamily="Entypo"
                                />
                         
                         
                    }

                        justifyContent='flex-start'>
                        <Div w={widthPercentageToDP(70)}>
                            <Text color='#4E5F70' fontWeight='500' fontSize={14}>Rate App</Text>
                        </Div>
                    </Button>
                    <Button
                        onPress={() => {
                            onLogout()
                            router.replace('/')
                        }}
                        bg="white"
                        px={20}
                        prefix={
                            <Icon
                            rounded="circle"
                            bg="white"
                            p={10}
                            name="logout"
                            color="#E40D0D"
                            fontSize={20}
                            fontFamily="MaterialIcons"
                        />   
                        }
                        suffix={
                                <Icon
                                    rounded="circle"
                                    bg="primary"
                                    p={10}
                                    name="logout"
                                    color="white"
                                    fontSize={20}
                                    fontFamily="MaterialIcons"
                                />   
                    }

                        justifyContent='flex-start'>
                        <Div w={widthPercentageToDP(70)}>
                            <Text color='#4E5F70' fontWeight='500' fontSize={14}>Keluar</Text>
                        </Div>
                    </Button>
                </Div>
            </Div>
        </Div>
    )
}

export default Profile