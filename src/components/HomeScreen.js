import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync();
        setLocation(coords);
      } else {
        console.log('Location permission not granted');
      }
    } catch (error) {
      console.log('Error fetching location:', error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const handleRefresh = () => {
    fetchLocation();
  };

  const handleViewHistory = () => {
    navigation.navigate('Second');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      {location && (
        <View style={styles.locationContainer}>
          <Text style={styles.label}>Last Known Location:</Text>
          <Text style={styles.text}>
            Latitude: {location.latitude.toFixed(6)}, Longitude: {location.longitude.toFixed(6)}
          </Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              />
            </MapView>
          </View>
        </View>
      )}
      <Button title="Refresh" onPress={handleRefresh} />
      <Button title="View History" onPress={handleViewHistory} />
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
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  mapContainer: {
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
