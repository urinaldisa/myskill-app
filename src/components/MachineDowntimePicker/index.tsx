import React, { useState } from "react";
import { Button, Div, Icon, Text } from "react-native-magnus";
import {
    widthPercentageToDP
} from "react-native-responsive-screen";
import { COLOR_DISABLED, COLOR_PLACEHOLDER } from "../../helper/theme";
import { Select } from "../select";

type PropTypes = {
    value: string | any[];
    onSelect: (value: any) => void;
    disabled?: boolean;
    flex?: boolean;
};

const MachineDowntimePicker = ({ value, onSelect }: PropTypes) => {
    const [key, setKey] = useState("");
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState();
    const [visible, setVisible] = useState(false);
    const selectRef = React.createRef();
    const found = data.find((e) => e.id.toString() === value);
    return (
        <Div mt={20}>
            <Text fontWeight='500'>Machine Dawntime</Text>
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
                suffix={(  <Icon
                    rounded="circle"
                    name="save"
                    fontSize={20}
                    fontFamily="FontAwesome"
                />)}
            >
                <Text w={widthPercentageToDP(82)} color={!found ? "grey" : "#000"}>
                    {!found ? "Please selecet machine dawntime" : found?.name}
                </Text>
            </Button>
            <Select
                visible={visible}
                setVisible={setVisible}
                onSelect={onSelect}
                value={selected}
                title="Machine Dawntime"
                data={!!data ? data : []}
                keyExtractor={(_, idx: number) => idx.toString()}
                renderItem={(item, index) => (
                    <Select.Option
                        value={item?.id?.toString()}
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

export default MachineDowntimePicker;
