import React, { useState } from 'react'
import { Button, Div, Icon, Modal, Text } from 'react-native-magnus'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native';
import Stopwatch from '../stopwatch';
import useIEInputMutation from '../../api/IEModule/useIEInputMutation';
import { useLocalSearchParams } from 'expo-router';
import formatDuration from '../../helper/timeFormatter';
import moment from 'moment';

const BottomTab = ({ value, setValue, sumData }: any) => {
    const [visible, setVisible] = useState(false);
    const { formattedDuration } = formatDuration(sumData / value.length || 0);

    const { mutateAsync, isLoading } = useIEInputMutation();
    const { operatorId, processId, allowance, date } = useLocalSearchParams();
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
    console.log(rawData,'data')
    const handleSubmit = () => {
        mutateAsync({
            operator: operatorId,
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
            <Div bg='white' p={20} row justifyContent='space-around' minH={heightPercentageToDP(10)}>
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
                <TouchableOpacity onPress={() => setVisible(!visible)}>
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
                <TouchableOpacity onPress={handleSubmit}>
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
            <Modal isVisible={visible}>
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
                    <Icon color="black900" name="close" />
                </Button>
                <Stopwatch setVisible={setVisible} value={value} setValue={setValue} />
            </Modal>
        </>
    )
}

export default BottomTab