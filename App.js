import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import Spaceships from "./Pages/Spaceships";
import Films from "./Pages/Films";
import Planets from "./Pages/Planets";
import SpaceshipsDetails from "./Pages/SpaceshipsDetails";
import FilmsDetails from "./Pages/FilmsDetails";
import PlanetsDetails from "./Pages/PlanetsDetails";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Spaceships" component={Spaceships} />
      <Tab.Screen name="Films" component={Films} />
      <Tab.Screen name="Planets" component={Planets} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Spaceships" component={Spaceships} />
      <Drawer.Screen name="Films" component={Films} />
      <Drawer.Screen name="Planets" component={Planets} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Platform.OS === "android" && (
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
        )}
        {Platform.OS == "ios" && (
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        )}
        {/* This is for testing, I build using web browser */}
        {Platform.OS == "web" && (
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen name="SpaceshipsDetails" component={SpaceshipsDetails} />
        <Stack.Screen name="FilmsDetails" component={FilmsDetails} />
        <Stack.Screen name="PlanetsDetails" component={PlanetsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
