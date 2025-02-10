import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'pendingShipments';

export const saveShipment = async (shipment: object) => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    const shipments = storedData ? JSON.parse(storedData) : [];
    shipments.push(shipment);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(shipments));
    console.log('Shipment saved offline:', shipment);
  } catch (error) {
    console.error('Error saving shipment:', error);
  }
};

export const getShipments = async () => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('Error fetching shipments:', error);
    return [];
  }
};

export const clearShipments = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('Cleared all shipments');
  } catch (error) {
    console.error('Error clearing shipments:', error);
  }
};
