import React from 'react'
import { Button, Div, ScrollDiv, Text } from 'react-native-magnus'
import { PinInput } from '@pakenfit/react-native-pin-input';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';


const VerificationCode = () => {
  const router = useRouter();

  return (
    <Div flex={1} bg='white'>
      <Div   flex={1} justifyContent='center'>
      <Div mx={widthPercentageToDP(10)}>
        <Text fontSize={20} fontWeight='bold'>Enter Your PIN</Text>
        <Text my={10} fontSize={14}>Please Enter your PIN to access application</Text>
      </Div>
      <PinInput
        inputStyle={{
          width: 50,
          height: 70
        }}
        containerStyle={{
          backgroundColor: 'white',
        }}
        length={6} onFillEnded={otp => console.log(otp)} />
      </Div>
      <Button onPress={() => router.push('/Main')} bg='#429669' mb={20} w={widthPercentageToDP(90)} alignSelf='center'>
        Submit
      </Button>
    </Div>
  )
}

export default VerificationCode