import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import AuthorizedScreen from "./containers/AuthorizedScreen";
import LoginScreen from "./containers/LoginScreen";
import { Provider, connect } from "react-redux";
import configureStore from "./redux/store";
import themeReducer from "./redux/reducers/themeReducers";

const Stack = createStackNavigator();
const { store } = configureStore();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="AuthorizedScreen"
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
    </Stack.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function RootRouterStore() {
  return (
    <Provider store={store}>
      <ConnectedRootRouter />
    </Provider>
  )
}


function RootRouter({ theme }) {
  console.log(DarkTheme)
  return (
      <NavigationContainer theme={theme ? DarkTheme : DefaultTheme}>
        <RootStack />
      </NavigationContainer>
  );
}

const mapStateToProps = ({ themeReducer }, ownProps) => ({
    theme: themeReducer.theme,
});

const ConnectedRootRouter = connect(mapStateToProps)(RootRouter);
