import { View, Text, Platform, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import StopwatchTimer, { StopwatchTimerMethods } from 'react-native-animated-stopwatch-timer'

const Stopwatch = () => {
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

    return (
        <View>
            <StopwatchTimer
                ref={stopwatchRef}
                // containerStyle={styles.stopWatchContainer}
                digitStyle={Platform.select({
                    ios: {
                        width: 30,
                        fontSize: 25,

                    },
                    android: undefined,
                })}
                separatorStyle={Platform.select({
                    ios: {
                        width: 14,
                        fontSize: 0
                    },
                    android: undefined,
                })}
                // textCharStyle={styles.stopWatchChar}
                trailingZeros={2}
            // Uncomment the below line to use it in timer mode
            // initialTimeInMs={30 * 1000}
            />
            <View style={{
                marginTop: 40,
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: 300,
                backgroundColor: 'white'
            }}>
                <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'lightgrey', padding: 10, width: 100 }} onPress={play}>
                    <Text>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', marginHorizontal: 15, backgroundColor: 'lightgrey', padding: 10, width: 100 }} onPress={pause}>
                    <Text>Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', backgroundColor: 'lightgrey', padding: 10, width: 100 }} onPress={reset}>
                    <Text>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Stopwatch