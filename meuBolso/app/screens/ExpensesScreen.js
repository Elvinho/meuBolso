import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, TextInput } from "react-native";

const initialTransactions = [
  { id: "1", category: "Alimentação", value: 50, date: "2025-01-15" },
  { id: "2", category: "Transporte", value: 30, date: "2025-01-16" },
  { id: "3", category: "Lazer", value: 20, date: "2025-01-17" }
];
 
export default function ExpensesScreen() {

  const [transactions, setTransactions] = useState(initialTransactions);
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const addTransaction = () => {
    const newTransaction = {
      id: String(transactions.length +1),
      category,
      value: parseFloat(value),
      date
    };
    setTransactions([...transactions, newTransaction]);
    setCategory("");
    setValue("");
    setDate("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Gastos</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactions}>
            <Text>{item.category} - ${item.value} - {item.date}</Text>
          </View>
        )}
      />
      <TextInput
      style={styles.input}
      placeholder="Categoria"
      value={category}
      onChange={setCategory}
      />
      <TextInput
      style={styles.input}
      placeholder="Valor"
      value={value}
      onChange={setValue}
      keyboardType="numeric"
      />
      <TextInput
      style={styles.input}
      placeholder="Data (YYYY-MM-DD)"
      value={date}
      onChange={setDate}
      />
      <Button title="Adicionar Transacao" onPress={addTransaction}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  transaction: { padding: 10, borderBottomWidth: 1, marginBottom: 10 },
  input: { height: 40, borderColor: "#ccc", borderWidth: 1, marginBottom: 10, paddingLeft: 8 }
});
