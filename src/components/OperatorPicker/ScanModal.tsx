import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Button, Div, Modal, Text } from 'react-native-magnus';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useGetOperatorbyQR } from '../../api/IEModule/useGetOperatorbyQR';

const ScanModal = ({ showCamera, setShowCamera, setOperator }: any) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [code, setCode] = useState(null)
    const { data: operatorData, isLoading, isFetching, refetch, isSuccess } = useGetOperatorbyQR({
        code: code
    });
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setCode(data)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    useEffect(() => {
        if (code) {
            refetch().then(() => {
                setScanned(false)
                setCode(null)
                setShowCamera(false)
                setOperator(operatorData?.data)
            })
        }
    }, [code])

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    return (
        <Modal isVisible={showCamera} h={heightPercentageToDP(80)} roundedTop={15} onBackdropPress={() => setShowCamera(false)}>
            <Div alignSelf='center' mt={20}>
                {!!showCamera ? (
                    <BarCodeScanner style={{ height: heightPercentageToDP(50), width: widthPercentageToDP(90) }} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} />

                ) : null}

            </Div>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            <Button
                bg="#F5F8FA"
                mt={30}
                alignSelf='center'
                w={widthPercentageToDP(90)}
                justifyContent="flex-start"
                rounded={6}
                borderColor="#cbd5e0"
                onPress={() => setShowCamera(false)}
            >
                <Text  >
                    Close Camera
                </Text>
            </Button>
        </Modal>
    )
}

export default ScanModal