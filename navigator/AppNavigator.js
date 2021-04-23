import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpEmailScreen from "../screens/SignUpEmailScreen";
import SignUpPasswordScreen from "../screens/SignUpPasswordScreen";

const AuthStack = createStackNavigator();

export const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUpEmail"
        component={SignUpEmailScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUpPassword"
        component={SignUpPasswordScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

const RootStack = () => {
  return <TabNavigator />;
};

export default RootStack;
