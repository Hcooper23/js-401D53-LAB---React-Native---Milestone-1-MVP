import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LocationService from '../services/LocationService';

const SecondScreen = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchRecentLocations = async () => {
      try {
        const recentLocations = await LocationService.getRecentLocations();
        setLocations(recentLocations);
        setSelectedLocation(recentLocations[0]);
      } catch (error) {
        console.log('Error fetching recent locations:', error);
      }
    };

    fetchRecentLocations();
  }, []);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.label}>Recent Locations:</Text>
        <Picker
          selectedValue={selectedLocation}
          onValueChange={handleLocationChange}
          style={styles.picker}
        >
          {locations.map((location, index) => (
            <Picker.Item
              key={index}
              label={`Location ${index + 1}`}
              value={location}
            />
          ))}
        </Picker>
        {selectedLocation && (
          <View style={styles.selectedLocationContainer}>
            <Text style={styles.selectedLocationText}>
              Latitude: {selectedLocation.latitude}
            </Text>
            <Text style={styles.selectedLocationText}>
              Longitude: {selectedLocation.longitude}
            </Text>
            <Text style={styles.selectedLocationText}>
              Rendered at: {selectedLocation.timestamp}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  locationContainer: {
    backgroundColor: '#E0E0E0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  picker: {
    marginBottom: 16,
  },
  selectedLocationContainer: {
    backgroundColor: '#D3D3D3',
    padding: 12,
    borderRadius: 8,
  },
  selectedLocationText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default SecondScreen;
