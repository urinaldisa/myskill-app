import React, { useEffect, useRef, useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import StopwatchTimer, { StopwatchTimerMethods } from 'react-native-animated-stopwatch-timer';
import { Div, Icon, Text } from 'react-native-magnus';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { COLOR_PRIMARY } from '../../helper/theme';

const Stopwatch = ({ value, setValue, setVisible }: any) => {
    const [statePause, setStatePause] = useState(false)
    const stopwatchRef = useRef<StopwatchTimerMethods>(null);
    // Methods to control the stopwatch
    function play() {
        stopwatchRef.current?.play();
    }

    function pause() {
        stopwatchRef.current?.pause();
    }

    function reset() {
        stopwatchRef.current?.reset();
    }
    const snapshot = stopwatchRef.current?.getSnapshot()
    const handleButtonClick = () => {
        // Use the spread operator to create a new array with the existing values
        // and add the new value at the end.
        setValue([...value, {
            time: stopwatchRef.current?.getSnapshot(),
            qty: 1,

        }]);
    };

    useEffect(() => {
        if (!statePause) {
            play()
        }
        return
    }, [statePause])
    return (
        <Div alignItems='center' justifyContent='center' flex={1} mt={heightPercentageToDP(10)}>
            <StopwatchTimer
                ref={stopwatchRef}
                // containerStyle={styles.stopWatchContainer}
                digitStyle={Platform.select({
                    ios: {
                        width: 40,
                        fontSize: 50,
                        fontWeight: 'bold',
                        color: COLOR_PRIMARY
                    },
                    android: {
                        width: 30,
                        fontSize: 40,

                    },
                })}
                separatorStyle={Platform.select({
                    ios: {
                        width: 20,
                        fontSize: 40
                    },
                    android: undefined,
                })}
                // textCharStyle={styles.stopWatchChar}
                trailingZeros={2}
            // Uncomment the below line to use it in timer mode
            // initialTimeInMs={30 * 1000}
            />
            <Div style={{
                marginTop: 40,
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: 300,
                alignItems: 'center',
                backgroundColor: 'white'
            }}>

                <TouchableOpacity onPress={() => {
                    pause()
                    setStatePause(!statePause)
                }}>
                    <Div alignItems='center' justifyContent='center'>
                        <Icon
                            rounded="circle"
                            color='black'
                            name="pausecircleo"
                            fontSize={30}
                            fontFamily="AntDesign"
                        />
                        <Text>{!!statePause ? 'Play' : 'Pause'}</Text>
                    </Div>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    handleButtonClick()
                    setVisible(false)
                }}>
                    <Div alignItems='center' justifyContent='center'>
                        <Icon
                            rounded="circle"
                            color='#E40D0D'
                            name="stop-circle"
                            fontSize={60}
                            fontFamily="FontAwesome"
                        />

                    </Div>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButtonClick}>
                    <Div alignItems='center' justifyContent='center'>
                        <Icon
                            rounded="circle"
                            color='black'
                            name="flag"
                            fontSize={30}
                            fontFamily="Entypo"
                        />
                        <Text>Lap</Text>
                    </Div>
                </TouchableOpacity>
            </Div>
        </Div>
    )
}

export default Stopwatch