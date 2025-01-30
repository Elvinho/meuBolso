import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const data = [
  {
    name: 'Alimentacao',
    population: 215,
    color: '#f39c12',
    legendFontColor:'#7F8C8D',
    legendFontSize:15
  },
  {
    name: "Transporte",
    population: 150,
    color: "#3498db",
    legendFontColor: "#7F8C8D",
    legendFontSize: 15
  },
  {
    name: "Lazer",
    population: 90,
    color: "#2ecc71",
    legendFontColor: "#7F8C8D",
    legendFontSize: 15
  },
  {
    name: "Saúde",
    population: 50,
    color: "#e74c3c",
    legendFontColor: "#7F8C8D",
    legendFontSize: 15
  }
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo dos Gastos</Text>
      <PieChart
        data={data}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e6e6e6',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[10, 10]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
});
