import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Div, Input, Text } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import LanguagePicker from '../../src/components/LanguagePicker'

const Configuration = () => {
    const [language, setLanguage] = useState("")
    return (
        <Div flex={1} bg='white'>
            <SafeAreaView >
                <Div alignItems='center' justifyContent='center' bg='white' h={heightPercentageToDP(100)}>
                    <Div mx={20} mb={heightPercentageToDP(5)}>
                        <Text my={10} fontSize={20} fontWeight='700'>Configuration</Text>
                        <Text fontSize={14} fontWeight='normal'>Setup Application</Text>
                        <LanguagePicker
                            value={language}
                            onSelect={(value) => setLanguage(value)}
                        />
                        <Div mt={20}>
                            <Text mb={10} fontWeight='500'>Web services</Text>
                            <Input placeholder='Https://' mb={20} />
                        </Div>
                        <Button onPress={() => console.log('ee')} mb={heightPercentageToDP(5)} bg='#429669' w={widthPercentageToDP(40)} alignSelf='center'>
                            Submit
                        </Button>
                    </Div>
                </Div>
            </SafeAreaView>
        </Div>
    )
}

export default Configuration