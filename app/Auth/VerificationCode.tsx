import { PinInput } from '@pakenfit/react-native-pin-input';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Div, Text } from 'react-native-magnus';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import useLoginMutation from '../../src/api/Auth/useLoginMutation';


const VerificationCode = () => {
  const { mutateAsync , isLoading } = useLoginMutation();
  const [pin, setPin] = useState("")
  const { email } = useGlobalSearchParams();
  const handleLogin = () => {
    mutateAsync({
      email: "ghon.doks@gmail.com",
      password: pin
    })
  }
  // router.push('/Main')
  return (
    <Div flex={1} bg='white'>
      <Div   flex={1} justifyContent='center'>
      <Div mx={widthPercentageToDP(10)}>
        <Text fontSize={20} fontWeight='bold'>Enter Your PIN</Text>
        <Text my={10} fontSize={14}>Please Enter your PIN to access application</Text>
      </Div>
      <PinInput
        onFillEnded={otp => setPin(otp)}
        inputStyle={{
          width: 50,
          height: 70
        }}
        containerStyle={{
          backgroundColor: 'white',
        }}
        length={6} />
      </Div>
      <Button loading={isLoading} onPress={() => handleLogin()} bg='#429669' mb={20} w={widthPercentageToDP(90)} alignSelf='center'>
        Submit
      </Button>
    </Div>
  )
}

export default VerificationCode