import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Div, Text } from "react-native-magnus";
import { heightPercentageToDP } from "react-native-responsive-screen";

type Props = {};

export default (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#ef633f" />
      <Text
        fontSize={16}
        color="grey"
        textAlign="center"
        mt={heightPercentageToDP(4)}
      >
        Study overseas made easy with SUN
      </Text>
    </View>
  );
};
