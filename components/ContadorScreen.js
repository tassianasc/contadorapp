import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function ContadorScreen({ navigation }) {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>
      <View style={styles.botoes}>
        <Button title="+" onPress={() => setContador(contador + 1)} />
        <Button title="-" onPress={() => setContador(contador - 1)} />
      </View>
      <View style={styles.resultadoBtn}>
        <Button
          title="Ver Resultado"
          onPress={() => navigation.navigate('Resultado', { contador })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 40 },
  texto: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  botoes: { flexDirection: 'row', gap: 10 },
  resultadoBtn: { marginTop: 20 }
});
