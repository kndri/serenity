import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const RootStack = () => {
  return <TabNavigator />;
};

export default RootStack;