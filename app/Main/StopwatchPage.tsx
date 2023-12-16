import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Div, Icon } from 'react-native-magnus';
import { useRecoilState } from 'recoil';
import Stopwatch from '../../src/components/stopwatch';
import LoadActivity from '../../src/providers/atoms/activityLoad';
import useStorageState from '../../src/providers/useStorageState';

const StopwatchPage = () => {
    const router = useRouter()
    const [visible, setVisible] = useState(false);
    const [activityLoad, setActivityLoad] = useRecoilState(LoadActivity)

  return (
    <Div flex={1} bg='white'>
    <Button
        bg="gray400"
        h={35}
        w={35}
        position="absolute"
        top={50}
        right={15}
        rounded="circle"
        onPress={() => {
            router.back()
        }}
    >
        <Icon name="close" />
    </Button>
    <Stopwatch setVisible={setVisible} value={activityLoad} setValue={setActivityLoad} />
</Div>
  )
}

export default StopwatchPage