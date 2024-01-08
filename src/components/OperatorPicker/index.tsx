import React, { useEffect, useState } from "react";
import { Button, Div, Icon, Input, Modal, Text } from "react-native-magnus";
import {
    heightPercentageToDP,
    widthPercentageToDP
} from "react-native-responsive-screen";
import useOperatorList from "../../api/IEModule/useOperatorList";
import { COLOR_DISABLED, COLOR_PLACEHOLDER } from "../../helper/theme";
import { Select } from "../select";
import ScanModal from "./ScanModal";

type PropTypes = {
    value: string | any[];
    userQR: string | any[];
    onSelect: (value: any) => void;
    disabled?: boolean;
    flex?: boolean;
    setOperator?: any
};

const OperatorPicker = ({ value, onSelect, setOperator, userQR }: PropTypes) => {
    const [key, setKey] = useState("");
    const [selected, setSelected] = useState();
    const [visible, setVisible] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const selectRef = React.createRef();
    const { data: dataList, refetch, isLoading } = useOperatorList({
        search: key
    });
    const operatorData = dataList?.pages.flatMap((page) => page.data);
    const found = operatorData?.find((e) => e.id === value?.id);
    useEffect(() => {
        refetch()
    }, [key])
    return (
        <Div mt={20}>
            <Text mb={10} fontWeight='500'>Operator <Text color='red'>*</Text></Text>
            <Div row justifyContent='space-between'>
                <Button
                    borderWidth={0.2}
                    bg="#F5F8FA"
                    block
                    mt={5}
                    w={widthPercentageToDP(70)}
                    color={selected ? "primary" : COLOR_PLACEHOLDER}
                    justifyContent="flex-start"
                    rounded={6}
                    borderColor="#cbd5e0"
                    onPress={() => setVisible(!visible)}
                    suffix={(<Icon
                        rounded="circle"
                        name="search"
                        fontSize={18}
                        fontFamily="FontAwesome"
                    />)}
                >
                    <Text w={widthPercentageToDP(82)} color={!found && !userQR ? "grey" : "#000"}>
                        {!!userQR ? userQR?.name : !found ? "Please selecet Operator" : found?.name}
                    </Text>
                </Button>
                <Button
                    borderWidth={0.2}
                    bg="#F5F8FA"
                    mt={5}
                    w={widthPercentageToDP(20)}
                    color={selected ? "primary" : COLOR_PLACEHOLDER}
                    justifyContent="flex-start"
                    rounded={6}
                    borderColor="#cbd5e0"
                    onPress={() => !userQR ? setShowCamera(true) : setOperator(null)}
                >
                    <Icon
                        rounded="circle"
                        name={!!userQR ? 'closecircleo' : 'qrcode'}
                        fontSize={20}
                        fontFamily="AntDesign"
                    />
                </Button>
            </Div>
         <ScanModal setOperator={(value) => setOperator(value)} showCamera={showCamera} setShowCamera={setShowCamera}/>
            <Select
                visible={visible}
                setVisible={setVisible}
                onSelect={onSelect}
                value={selected}
                message={
                    <>
                        <Text mb={5}>Please select Operator Name</Text>
                        <Div row px={0} pt={10} bg="white">
                            <Input
                                flex={1}
                                placeholder={"Search by name"}
                                focusBorderColor="primary"
                                value={key}
                                suffix={
                                    <Icon
                                        rounded="circle"
                                        name="qrcode"
                                        fontSize={18}
                                        fontFamily="AntDesign"
                                    />
                                }
                                onChangeText={(val) => {
                                    setKey(val)
                                }}
                            />
                        </Div>

                    </>
                }
                title="Select Operator"
                data={!!operatorData ? operatorData : []}
                keyExtractor={(_, idx: number) => idx.toString()}
                renderItem={(item: { id: { toString: () => any; }; name: any; }, index: any) => (
                    <Select.Option
                        value={item}
                        p={20}
                        borderBottomWidth={0.8}
                        borderBottomColor={COLOR_DISABLED}
                    >
                        {item.name}
                    </Select.Option>
                )}
            />
        </Div>
    );
};

export default OperatorPicker;
