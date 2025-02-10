import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {saveShipment} from '../storage/AsyncStorageService';

const ShipmentForm = () => {
  const [shipment, setShipment] = useState('');

  const handleSave = async () => {
    if (shipment.trim()) {
      const newShipment = {
        id: Date.now().toString(),
        name: shipment,
        date: new Date().toLocaleString(),
      };

      await saveShipment(newShipment);
      setShipment('');
      Alert.alert('Shipment saved offline!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter shipment details"
        value={shipment}
        onChangeText={setShipment}
      />
      <Button title="Save Shipment" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 20},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ShipmentForm;
