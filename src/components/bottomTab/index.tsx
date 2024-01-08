import React, { useState } from 'react'
import { Button, Div, Icon, Overlay, Text, Modal } from 'react-native-magnus'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Stopwatch from '../stopwatch';
import useIEInputMutation from '../../api/IEModule/useIEInputMutation';
import { router, useLocalSearchParams } from 'expo-router';
import formatDuration from '../../helper/timeFormatter';
import moment from 'moment';
import { COLOR_DISABLED, COLOR_GREEN } from '../../helper/theme';

const BottomTab = ({ value, setValue, sumData, visible, setVisible }: any) => {
    const { formattedDuration } = formatDuration(sumData / value.length || 0);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const { mutateAsync, isLoading } = useIEInputMutation();
    const { operatorId, processId, allowance, date, styleId } = useLocalSearchParams();
    console.warn(styleId,'style')
    const { formattedDuration: resultTime } = formatDuration((sumData * allowance) / 100 || sumData / value.length || 0);
    const rawData = value.map((e: {
        qty: any; time: string;
    }) => {
        const { formattedDuration } = formatDuration(e.time);
        return {
            duration: formattedDuration,
            qty: e.qty
        }
    })
    const handleSubmit = () => {
        mutateAsync({
            operator: operatorId,
            style: styleId,
            process: processId,
            allowance: allowance,
            average: formattedDuration,
            result: resultTime,
            cycle_time: rawData,
            date: moment(date).format('YYYY-MM-DD')
        })
    }
    return (
        <>
            <Div style={{ elevation: 0 }} bg='white' p={20} row justifyContent='space-around' minH={heightPercentageToDP(10)}>
                <TouchableOpacity onPress={() => setValue([])}>
                    <Div alignItems='center' >
                        <Icon
                            rounded="circle"
                            name="loop"
                            fontSize={20}
                            fontFamily="MaterialIcons"
                        />
                        <Text>Reset</Text>
                    </Div>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/Main/StopwatchPage')}>
                    <Div>
                        <Icon
                            color='green'
                            rounded="circle"
                            name="play"
                            fontSize={30}
                            fontFamily="AntDesign"
                        />
                    </Div>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOverlayVisible(true)}>
                    <Div alignItems='center' >
                        <Icon
                            rounded="circle"
                            name="save"
                            fontSize={20}
                            fontFamily="FontAwesome"
                        />
                        <Text>Save</Text>
                    </Div>
                </TouchableOpacity>
            </Div>
            <Overlay visible={overlayVisible} p="xl" onBackdropPress={() => setOverlayVisible(!overlayVisible)}>
                {!!isLoading ? (
                    <>
                        <ActivityIndicator />
                        <Text mt="md">Loading...</Text>
                    </>
                ) : (
                    <Div>
                        <Text fontSize={16} fontWeight='500'>Sudah yakin dengan data yang akan di input ?</Text>
                        <Div row justifyContent='space-around' mt={20}>
                            <Button onPress={handleSubmit} w={widthPercentageToDP(30)} bg={COLOR_GREEN}>Submit</Button>
                            <Button onPress={() => setOverlayVisible(!overlayVisible)} w={widthPercentageToDP(30)} bg={COLOR_DISABLED}>Batal</Button>
                        </Div>
                    </Div>
                )}
            </Overlay>
            <Modal isVisible={visible} >
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
                            setVisible(false);
                        }}
                    >
                        <Icon name="close" />
                    </Button>
                    <Stopwatch setVisible={setVisible} value={value} setValue={setValue} />
                </Div>
            </Modal>
        </>
    )
}

export default BottomTab