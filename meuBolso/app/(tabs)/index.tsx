import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ExpensesScreen from "../screens/ExpensesScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Resumo") iconName = "bar-chart";
            else if (route.name === "Gastos") iconName = "wallet";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6200EE",
          tabBarInactiveTintColor: "gray",
          headerShown: false, // Remove o cabeçalho padrão
        })}
      >
        <Tab.Screen name="Resumo" component={HomeScreen} />
        <Tab.Screen name="Gastos" component={ExpensesScreen} />
      </Tab.Navigator>
  );
}
