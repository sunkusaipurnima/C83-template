/** @format */

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator}></Drawer.Screen>
      <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
