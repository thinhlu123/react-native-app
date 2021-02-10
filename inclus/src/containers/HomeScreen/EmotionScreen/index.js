import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { style } from "./style";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize, responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

function EmotionScreen({ navigation, route }) {
  const { emotion } = route.params;
  const onDone = () => {
    navigation.goBack()
  }
  return (
    <View style={style.container}>
      <View style={[style.headerContainer, { marginBottom: 20 }]}>
        <View style={{backgroundColor: 'yellow', alignItems: 'flex-end', marginTop: 40}}>
          <TouchableOpacity onPress={onDone}>
            <Text>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "mediumaquamarine", marginTop: 40 }}>
          <Text style={[style.titleHeader]}>qweqwe</Text>
        </View>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder={`Why are you feeling ${emotion}`}
          textAlignVertical={'top'}
          multiline={true}
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray", width: "100%", height: responsiveHeight(30),
          }}>

        </TextInput>
      </View>
    </View>

  );
}

export default EmotionScreen;
