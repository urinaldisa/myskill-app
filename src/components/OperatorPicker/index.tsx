import React, { useEffect, useState } from "react";
import { Button, Div, Icon, Input, Text } from "react-native-magnus";
import {
    widthPercentageToDP
} from "react-native-responsive-screen";
import useOperatorList from "../../api/IEModule/useOperatorList";
import { COLOR_DISABLED, COLOR_PLACEHOLDER } from "../../helper/theme";
import { Select } from "../select";

type PropTypes = {
    value: string | any[];
    onSelect: (value: any) => void;
    disabled?: boolean;
    flex?: boolean;
};

const OperatorPicker = ({ value, onSelect }: PropTypes) => {
    const [key, setKey] = useState("");
    const [selected, setSelected] = useState();
    const [visible, setVisible] = useState(false);
    const selectRef = React.createRef();
    const { data:dataList, refetch, isLoading } = useOperatorList({
        search: key
    });
    const operatorData = dataList?.pages.flatMap((page) => page.data);
    const found = operatorData?.find((e) => e.id === value?.id);
    useEffect(() => {
        refetch()
    },[key])
    return (
        <Div mt={20}>
            <Text mb={10} fontWeight='500'>Operator <Text color='red'>*</Text></Text>
            <Button
                borderWidth={0.2}
                bg="#F5F8FA"
                block
                mt={5}
                color={selected ? "primary" : COLOR_PLACEHOLDER}
                justifyContent="flex-start"
                rounded={6}
                borderColor="#cbd5e0"
                onPress={() => setVisible(!visible)}
                suffix={(   <Icon
                    rounded="circle"
                    name="search"
                    fontSize={18}
                    fontFamily="FontAwesome"
                />)}
            >
                <Text w={widthPercentageToDP(82)} color={!found ? "grey" : "#000"}>
                    {!found ? "Please selecet Operator" : found?.name}
                </Text>
            </Button>
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
