import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import {getShipments, clearShipments} from '../storage/AsyncStorageService';
import useNetwork from '../hooks/useNetwork';

const ShipmentList = () => {
  interface Shipment {
    id: string;
    name: string;
    date: string;
  }

  const [shipments, setShipments] = useState<Shipment[]>([]);
  const isConnected = useNetwork();

  useEffect(() => {
    const fetchShipments = async () => {
      const data = await getShipments();
      setShipments(data);
    };

    fetchShipments();
  }, [isConnected, shipments]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Shipments</Text>
      <FlatList
        data={shipments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Text style={styles.shipmentItem}>
            {item.name} - {item.date}
          </Text>
        )}
      />
      <Button title="Clear Shipments" onPress={() => clearShipments()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 20},
  header: {fontSize: 18, fontWeight: 'bold'},
  shipmentItem: {padding: 10, borderBottomWidth: 1, borderColor: '#ccc'},
});

export default ShipmentList;
