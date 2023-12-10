import React, { useEffect, useState } from "react";
import { Button, Div, Icon, Text } from "react-native-magnus";
import {
    widthPercentageToDP
} from "react-native-responsive-screen";
import useProcessList from "../../api/IEModule/useProcessList";
import { COLOR_DISABLED, COLOR_PLACEHOLDER } from "../../helper/theme";
import { Select } from "../select";

type PropTypes = {
    value: string | any[];
    onSelect: (value: any) => void;
    disabled?: boolean;
    flex?: boolean;
    styleId: string
};

const ProcessPicker = ({ value, onSelect, styleId, disabled }: PropTypes) => {
    const [key, setKey] = useState("");
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState();
    const [visible, setVisible] = useState(false);
    const selectRef = React.createRef();
    const { data: dataList, refetch, isLoading } = useProcessList(parseInt(styleId),{});
    const processData = dataList?.pages.flatMap((page) => page.data);
    const found = processData?.find((e) => e.process.id.toString() === value);
    useEffect(() => {
        refetch()
    },[styleId])
    return (
        <Div mt={20}>
            <Text mb={10} fontWeight='500'>Process <Text color='red'>*</Text></Text>
            <Button
                borderWidth={0.2}
                bg="#F5F8FA"
                block
                mt={5}
                disabled={disabled}
                color={selected ? "primary" : COLOR_PLACEHOLDER}
                justifyContent="flex-start"
                rounded={6}
                borderColor="#cbd5e0"
                onPress={() => setVisible(!visible)}
                suffix={(<Icon
                    rounded="circle"
                    name="save"
                    fontSize={20}
                    fontFamily="FontAwesome"
                />)}
            >
                <Text w={widthPercentageToDP(82)} color={!found ? "grey" : "#000"}>
                    {!found ? "Please selecet style Process" : found?.process?.name}
                </Text>
            </Button>
            <Select
                visible={visible}
                setVisible={setVisible}
                onSelect={onSelect}
                value={selected}
                title="Select style Process"
                data={!!processData ? processData : []}
                keyExtractor={(_, idx: number) => idx.toString()}
                renderItem={(item: { id: { toString: () => any; }; name: any; }, index: any) => (
                    <Select.Option
                        value={item?.process?.id?.toString()}
                        p={20}
                        borderBottomWidth={0.8}
                        borderBottomColor={COLOR_DISABLED}
                    >
                        {item?.process?.name}
                    </Select.Option>
                )}
            />
        </Div>
    );
};

export default ProcessPicker;
