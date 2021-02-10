import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DarkTheme as DarkThemeNavigation,
  DefaultTheme as DefaultThemeNavigation,
} from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import AuthorizedScreen from "./containers/AuthorizedScreen";
import LoginScreen from "./containers/LoginScreen";
import HomeScreen from "./containers/HomeScreen";
import {
  DefaultTheme as DefaultThemePaper,
  DarkTheme as DarkThemePaper,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider, connect } from "react-redux";
import merge from "deepmerge";
import configureStore from "./redux/store";
import themeReducer from "./redux/reducers/themeReducers";
import ProfileScreen from "./containers/ProfileScreen";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SupportScreen from "./containers/SupportScreen";
import EmploymentScreen from "./containers/EmploymentScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EmotionScreen from "./containers/HomeScreen/EmotionScreen";
import TestScreen from "./containers/ProfileScreen/TestScreen";

const Stack = createStackNavigator();
const { store } = configureStore();
const CombinedDefaultTheme = merge(DefaultThemePaper, DefaultThemeNavigation);
const CombinedDarkTheme = merge(DarkThemePaper, DarkThemeNavigation);

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="MainTabsScreen"
      screenOptions={{ gestureEnabled: false, headerShown: false }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        // initialParams={{ user: 'me' }}
      />
      <Stack.Screen
        name="AuthorizedScreen"
        component={AuthorizedScreen}
        // options={{header: null}}
      />
      <Stack.Screen
        name="MainTabsScreen"
        component={MainTabsScreen}
      />
      <Stack.Screen
        name="EmotionScreen"
        component={EmotionScreen}
      />
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
      />
    </Stack.Navigator>
  );
}


export default function RootRouterStore() {
  return (
    <Provider store={store}>
      <ConnectedRootRouter />
    </Provider>
  );
}


function RootRouter({ theme }) {
  console.log(CombinedDarkTheme);
  return (
    <PaperProvider theme={theme ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer theme={theme ? CombinedDarkTheme : CombinedDefaultTheme}>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

const mapStateToProps = ({ themeReducer }, ownProps) => ({
  theme: themeReducer.theme,
});

const ConnectedRootRouter = connect(mapStateToProps)(RootRouter);
const Tab = createBottomTabNavigator();

function MainTabsScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return <MaterialCommunityIcon name="home-variant" size={size} color={color} />;
            case "Profile":
              return <FontAwesomeIcon name="user" size={size} color={color} />;
            case "Support":
              return <FontAwesomeIcon name="user" size={size} color={color} />;
            case "Employment":
              return <FontAwesomeIcon name="user" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
      <Tab.Screen name="Employment" component={EmploymentScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
