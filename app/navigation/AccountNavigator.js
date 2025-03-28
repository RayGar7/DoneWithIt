import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import AccountScreen from "../screens/AccountScreen";


const Stack = createStackNavigator();

const AccountNavigator = () => {
  return <AccountScreen />;
};


export default AccountNavigator;