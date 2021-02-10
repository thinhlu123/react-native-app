import React from "react";
import { View, Text } from "react-native";
import { style } from "./style";
import {
  responsiveScreenHeight,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import EmotionScreen from "../HomeScreen/EmotionScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SupportScreen from "../SupportScreen";
import EmploymentScreen from "../EmploymentScreen";
import HomeStackScreen, { Tab } from "../HomeScreen";
import TestScreen from "./TestScreen";

const ProfileStack = createStackNavigator();

// function ProfileTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           switch (route.name) {
//             case "Home":
//               return <MaterialCommunityIcon name="home-variant" size={size} color={color} />;
//             case "Profile":
//               return <FontAwesomeIcon name="user" size={size} color={color} />;
//             case "Support":
//               return <FontAwesomeIcon name="user" size={size} color={color} />;
//             case "Employment":
//               return <FontAwesomeIcon name="user" size={size} color={color} />;
//           }
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray",
//         labelStyle: {
//           fontSize: 15,
//         },
//       }}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Support" component={SupportScreen} />
//       <Tab.Screen name="Employment" component={EmploymentScreen} />
//       <Tab.Screen name="Profile" component={ProfileStackScreen} />
//     </Tab.Navigator>
//   );
// }

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <ProfileStack.Screen name="ProfileTabs" component={ProfileScreen} />
      <ProfileStack.Screen name="TestScreen" component={TestScreen} />
      {/*<HomeStack.Screen name="Settings" component={Settings} />*/}
    </ProfileStack.Navigator>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={style.container}>
      <View style={[style.headerContainer, {height: responsiveScreenHeight(80)}]}>
          <Text onPress={() => {navigation.navigate('TestScreen', {emotion: 'positive'})}}>
            asdasdasd
          </Text>
      </View>
    </View>

  );
}

export default ProfileScreen;
