import React, { useState } from "react";
import { Button, Div, Icon, Text } from "react-native-magnus";
import {
    widthPercentageToDP
} from "react-native-responsive-screen";
import useStyleList from "../../api/IEModule/useStyleList";
import { COLOR_DISABLED, COLOR_PLACEHOLDER } from "../../helper/theme";
import { Select } from "../select";

type PropTypes = {
    value: string | any[];
    onSelect: (value: any) => void;
    disabled?: boolean;
    flex?: boolean;
};

const LanguagePicker = ({ value, onSelect }: PropTypes) => {
    const [key, setKey] = useState("");
    const [selected, setSelected] = useState();
    const [visible, setVisible] = useState(false);
    const selectRef = React.createRef();
    const languageData = [
        {
            name: 'indonesia',
            id: 1
        },
        {
            name: 'Malaysia',
            id: 2
        },
        {
            name: 'Thailand',
            id: 3
        },
        {
            name: 'Philipines',
            id: 4
        },
    ]
    const found = languageData?.find((e) => e.id.toString() === value);

    return (
        <Div mt={20}>
            <Text mb={10} fontWeight='500'>Language</Text>
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
                    name="search"
                    fontSize={18}
                    fontFamily="FontAwesome"
                />)}
            >
                <Text w={widthPercentageToDP(82)} color={!found ? "grey" : "#000"}>
                    {!found ? "Please select Language" : found?.name}
                </Text>
            </Button>
            <Select
                visible={visible}
                setVisible={setVisible}
                onSelect={onSelect}
                value={selected}
                title="Select language"
                data={!!languageData ? languageData : []}
                keyExtractor={(_, idx: number) => idx.toString()}
                renderItem={(item: { id: { toString: () => any; }; name: any; }, index: any) => (
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

export default LanguagePicker;
