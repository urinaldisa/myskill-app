import { useRouter } from 'expo-router';
import React from 'react'
import { Div, Text, Image, ScrollDiv, Input, Button } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Intro = () => {
    const router = useRouter();

    return (
        <SafeAreaProvider>
        <ScrollDiv
            px={widthPercentageToDP(10)}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
            }}
        >
            <Div alignItems='center' top={heightPercentageToDP(-15)} >
                <Image source={require('../assets/logo/loginLogo.png')} h={heightPercentageToDP(15)} w={widthPercentageToDP(40)} resizeMode='contain' />
                <Text fontWeight='bold'>Skill Evaluation System</Text>
            </Div>
            <Div>
                <Text fontSize={20} fontWeight='bold' mb={heightPercentageToDP(5)}>Login</Text>
                <Text mb={10}>Email</Text>
                <Input placeholder='moozart@gmail.com' focusBorderColor="blue700" />
                <Button onPress={() => router.push('/Auth')} mt={heightPercentageToDP(5)} w='100%' bg='#0F2671'>
                    Login
                </Button>

            </Div>

        </ScrollDiv>
        </SafeAreaProvider>
    )
}

export default Intro