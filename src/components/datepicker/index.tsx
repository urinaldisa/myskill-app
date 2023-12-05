import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { format, isValid, startOfDay } from "date-fns";
import React, { useEffect, useState } from "react";
import { Appearance, Platform, ViewStyle } from "react-native";
import { Button, Div, Text } from "react-native-magnus";
import Modal from "react-native-modal";
import { COLOR_PRIMARY } from "../../helper/theme";

type PropTypes = {
  placeholder: string;
  value: string;
  onSelect: (value: Date) => void;
  block?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  widthButton?: number;
  borderColor?: string;
  dateColor?: boolean;
};

export default ({
  placeholder = "",
  value,
  onSelect,
  disabled = false,
  block = false,
  style,
  widthButton,
  borderColor = COLOR_PRIMARY,
  dateColor = true,
}: PropTypes) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const colorScheme = Appearance.getColorScheme();
  const todayDate = new Date();

  const dateObject = !!value ? new Date(value) : null;

  const [iosVal, setIosVal] = useState<any>(todayDate);

  useEffect(() => {
    setIosVal(!!value ? new Date(value) : todayDate);
  }, [value]);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    setShowDatePicker(false);
    if (selectedDate && isValid(selectedDate)) {
      onSelect(startOfDay(selectedDate));
    }
  };

  if (Platform.OS === "android") {
    return (
      <Div style={style}>
        <Button
          block={block}
          borderWidth={1}
          bg="white"
          color={dateColor ? "#000" : COLOR_PRIMARY}
          fontSize={11}
          py={13}
          w={widthButton}
          borderColor={borderColor}
          justifyContent="space-between"
          onPress={() => setShowDatePicker(true)}
          disabled={disabled}
        >
          {dateObject ? format(dateObject, "dd MMM yyyy") : placeholder}
        </Button>
        {!!showDatePicker && (
          <DateTimePicker
            value={dateObject || todayDate}
            mode="date"
            display="default"
            onChange={onChange}
            style={{
              opacity: 1,
              backgroundColor: "white",
            }}
          />
        )}
      </Div>
    );
  }

  if (Platform.OS === "ios") {
    return (
      <Div style={style}>
        {showDatePicker ? (
          <Modal
            useNativeDriver
            isVisible={showDatePicker}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            onBackdropPress={() => setShowDatePicker(false)}
          >
            <Div p={20} bg={colorScheme === "dark" ? COLOR_PRIMARY : "white"}>
              <DateTimePicker
                value={iosVal}
                mode="date"
                display="inline"
                onChange={(e, val) => setIosVal(val)}
                textColor="#fff"
                style={{
                  opacity: 1,
                }}
              />
              <Button
                onPress={() => {
                  onSelect(iosVal);
                  setShowDatePicker(false);
                }}
                bg={colorScheme === "dark" ? "white" : COLOR_PRIMARY}
                mt={30}
                mb={10}
                px={20}
                alignSelf="center"
                w={"100%"}
              >
                <Text
                  fontWeight="bold"
                  color={colorScheme === "dark" ? COLOR_PRIMARY : "white"}
                >
                  Apply
                </Text>
              </Button>
            </Div>
          </Modal>
        ) : (
          <Button
            block
            borderWidth={0.3}
            bg="#F5F8FA" 
            color="grey"
            fontSize={11}
            py={13}
            borderColor="lightgray"
            justifyContent="space-between"
            onPress={() => setShowDatePicker(true)}
            disabled={disabled}
          >
            
            <Text  color={!dateObject ? "grey" : "#000"}>
            {dateObject ? format(dateObject, "dd MMM yyyy") : placeholder}
                </Text>
          </Button>
        )}
      </Div>
    );
  }
  return null;
};
