import React from "react";
import { ScrollView, FlatList, Dimensions } from "react-native";
import { Chip, Avatar, Button } from "react-native-paper";
import { style } from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileStackScreen from "../ProfileScreen";
import EmploymentScreen from "../EmploymentScreen";
import SupportScreen from "../SupportScreen";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  responsiveScreenHeight,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import EmotionScreen from "./EmotionScreen";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
    <View style={{backgroundColor: "turquoise"}}>
      <View>
        <Text>
          07:43 AM
        </Text>
        <Text>
          {title}
        </Text>
      </View>
    </View>
    <View style={{backgroundColor: 'yellowgreen'}}>
      <Button>
        Check out
      </Button>
    </View>
  </View>
);

function TestView({navigation}) {
  const onPressEmotionChip = (emotion) => {
    navigation.navigate('EmotionScreen', {emotion: emotion})
  }
  return (
    <View>
      <View style={[style.headerContainer, { alignItems: "center", justifyContent: "space-between" }]}>
        <View style={{ backgroundColor: "mediumaquamarine", marginTop: 40, alignSelf: "stretch" }}>
          <View style={{ backgroundColor: "white" }}>
            <Text style={[style.titleHeader]}>Good morning,</Text>
            <Text style={style.titleHeader}>Evan Tran</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "mediumaquamarine", marginBottom: 15 }}>
          <View style={{ backgroundColor: "white" }}>
            <Text style={[style.quotes, { paddingRight: 30 }]}>Spread love everywhere you go. Let no one ever come to
              you without leaving happier</Text>
            <Text style={[style.authorQuotes, { alignSelf: "flex-end" }]}>-Mother Teresa</Text>
          </View>
        </View>
      </View>
      <View style={[style.emotionContainer]}>
        <View style={{ backgroundColor: "mediumaquamarine", marginTop: 10, alignSelf: "stretch" }}>
          <View style={{ backgroundColor: "white" }}>
            <Text style={style.titleHeader}>How are you feeling?</Text>
          </View>
        </View>
        <View style={{ backgroundColor: "mediumaquamarine", flexDirection: "row", flexWrap: "wrap",  }}>
          <Chip style={[style.chipEmotion,]} //icon={() => <FontAwesomeIcon name="user" />}
                avatar={<Avatar.Image style={style.chipAvatar} size={responsiveScreenFontSize(4)} source={require("../../assets/images/Baby.tux-800x800.png")} />}
                textStyle={{ fontSize: responsiveScreenFontSize(2.5) }}
                onPress={() => onPressEmotionChip('positive')}>Positive</Chip>
          <Chip style={style.chipEmotion} //icon={() => <FontAwesomeIcon name="user" />}
                avatar={<Avatar.Image style={style.chipAvatar} size={responsiveScreenFontSize(4)} source={require("../../assets/images/Baby.tux-800x800.png")} />}
                textStyle={{ fontSize: responsiveScreenFontSize(2.5) }}
                onPress={() => console.log("Pressed")}>Grateful</Chip>
          <Chip style={[style.chipEmotion]} //icon={() => <FontAwesomeIcon name="user" />}
                avatar={<Avatar.Image style={style.chipAvatar} size={responsiveScreenFontSize(4)} source={require("../../assets/images/Baby.tux-800x800.png")} />}
                textStyle={{ fontSize: responsiveScreenFontSize(2.5) }}
                onPress={() => console.log("Pressed")}>Happy</Chip>
          <Chip style={style.chipEmotion} //icon={() => <FontAwesomeIcon name="user" />}
                avatar={<Avatar.Image style={style.chipAvatar} size={responsiveScreenFontSize(4)} source={require("../../assets/images/Baby.tux-800x800.png")} />}
                textStyle={{ fontSize: responsiveScreenFontSize(2.5) }}
                onPress={() => console.log("Pressed")}>Angry</Chip>
          <Chip style={style.chipEmotion} //icon={() => <FontAwesomeIcon name="user" />}
                avatar={<Avatar.Image style={style.chipAvatar} size={responsiveScreenFontSize(4)} source={require("../../assets/images/Baby.tux-800x800.png")} />}
                textStyle={{ fontSize: responsiveScreenFontSize(2.5) }}
                onPress={() => console.log("Pressed")}>Tired</Chip>
          <Chip style={style.chipEmotion} //icon={() => <FontAwesomeIcon name="user" />}
                avatar={<Avatar.Image style={style.chipAvatar} size={responsiveScreenFontSize(4)} source={require("../../assets/images/Baby.tux-800x800.png")} />}
                textStyle={{ fontSize: responsiveScreenFontSize(2.5) }}
                onPress={() => console.log("Pressed")}>Sleepy</Chip>
          <Chip style={[style.chipEmotion, {alignItems: 'center'}]}
                avatar={<Avatar.Image style={style.chipAvatar} size={responsiveScreenFontSize(4)} source={require("../../assets/images/Baby.tux-800x800.png")} />}
                textStyle={{ fontSize: responsiveScreenFontSize(2.5) }}
                onPress={() => console.log("Pressed")}>Disappointed</Chip>
        </View>
      </View>
      <View style={[style.employmentContainer, {marginTop: 10, marginBottom: 15, }]}>
        {/*<View style={{ backgroundColor: "mediumaquamarine", marginTop: 10, marginBottom: 15 , alignSelf: "stretch" }}>*/}
        {/*  <View style={{ backgroundColor: "white", }}>*/}
            <Text style={style.titleHeader}>Employment</Text>
          {/*</View>*/}
        {/*</View>*/}
      </View>
    </View>
  )
}

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
      <View style={style.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => <TestView navigation={navigation} />}
        />
      </View>
  );
}

export default HomeScreen;
