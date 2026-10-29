import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Picker from '@react-native-picker/picker';

export default function Formulario() {
  const [mensaje, setMensaje] = useState(null);

  const handleCotizar = () => {
    setMensaje('Formulario creado');
  };

  return (
    <View style={styles.formulario}>
      <View style={styles.campo}>
        <Text style={styles.label}>Moneda</Text>
        <Picker
          style={styles.picker}
          selectedValue=""
          onValueChange={() => {}}
        >
          <Picker.Item label="Seleccione" value="" />
          <Picker.Item label="Dolar USD" value="USD" />
          <Picker.Item label="Peso Mexicano MXN" value="MXN" />
          <Picker.Item label="Euro EUR" value="EUR" />
          <Picker.Item label="Libra Esterlina GBP" value="GBP" />
        </Picker>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Criptomoneda</Text>
        <Picker
          style={styles.picker}
          selectedValue=""
          onValueChange={() => {}}
        >
          <Picker.Item label="Seleccione" value="" />
          <Picker.Item label="Bitcoin BTC" value="BTC" />
          <Picker.Item label="Ethereum ETH" value="ETH" />
          <Picker.Item label="Litecoin LTC" value="LTC" />
          <Picker.Item label="Ripple XRP" value="XRP" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.btnCotizar} onPress={handleCotizar}>
        <Text style={styles.btnText}>Cotizar</Text>
      </TouchableOpacity>

      {mensaje && <Text style={styles.mensaje}>{mensaje}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    padding: 20,
    backgroundColor: '#fff',
  },
  campo: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    color: '#333',
  },
  btnCotizar: {
    marginTop: 8,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  mensaje: {
    marginTop: 16,
    fontSize: 16,
    color: '#28a745',
    fontWeight: '600',
    textAlign: 'center',
  },
});
