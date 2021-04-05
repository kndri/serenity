import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";

const AuthStack = createStackNavigator();

export const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      {/* <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      /> */}
    </AuthStack.Navigator>
  );
};

const RootStack = () => {
  return <TabNavigator />;
};

export default RootStack;
