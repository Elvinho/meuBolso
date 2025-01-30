import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/tab/index"; // Importando a navegação

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
