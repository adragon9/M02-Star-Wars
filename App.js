import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Spaceships from "./Pages/Spaceships";
import Films from "./Pages/Films";
import Planets from "./Pages/Planets";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Spaceships" component={Spaceships} />
          <Drawer.Screen name="Films" component={Films} />
          <Drawer.Screen name="Planets" component={Planets} />
        </Drawer.Navigator>
      )}
      {Platform.OS == "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Spaceships" component={Spaceships} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Planets" component={Planets} />
        </Tab.Navigator>
      )}
      {/* This is for testing, I build using web browser */}
      {Platform.OS == "web" && (
        <Tab.Navigator>
          <Tab.Screen name="Spaceships" component={Spaceships} />
          <Tab.Screen name="Films" component={Films} />
          <Tab.Screen name="Planets" component={Planets} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
