import { useState } from "react";
import { View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Index() {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [mensaje, setMensaje] = useState("");

  const cotizar = () => {
    setMensaje("Formulario creado");
  };

  return (
    <View>
      <Text>Moneda</Text>

      <Picker
        selectedValue={moneda}
        onValueChange={(valor) => setMoneda(valor)}
      >
        <Picker.Item label="Seleccione una moneda" value="" />
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Peso Mexicano (MXN)" value="MXN" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
        <Picker.Item label="Libra Esterlina (GBP)" value="GBP" />
      </Picker>

      <Text>Criptomoneda</Text>

      <Picker
        selectedValue={criptomoneda}
        onValueChange={(valor) => setCriptomoneda(valor)}
      >
        <Picker.Item label="Seleccione una criptomoneda" value="" />
        <Picker.Item label="Bitcoin (BTC)" value="BTC" />
        <Picker.Item label="Ethereum (ETH)" value="ETH" />
        <Picker.Item label="Litecoin (LTC)" value="LTC" />
        <Picker.Item label="Solana (SOL)" value="SOL" />
        <Picker.Item label="Dogecoin (DOGE)" value="DOGE" />
      </Picker>

      <Button title="Cotizar" onPress={cotizar} />

      {mensaje !== "" && <Text>{mensaje}</Text>}
    </View>
  );
}
