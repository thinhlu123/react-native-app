import React from "react";
import { View } from "react-native";
import { style } from "./style";
import { Chip, Text } from "react-native-paper";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function SupportScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text>
        <Chip icon={() => <FontAwesomeIcon name="user" />} onPress={() => console.log('Pressed')}>Example Chip</Chip>
      </Text>

    </View>

  );
}

export default SupportScreen;
