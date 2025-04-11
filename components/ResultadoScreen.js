import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultadoScreen({ route, navigation }) {
  const { contador } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado Final</Text>
      <Text style={styles.valor}>Contador: {contador}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 50 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  valor: { fontSize: 22, marginBottom: 20 }
});
