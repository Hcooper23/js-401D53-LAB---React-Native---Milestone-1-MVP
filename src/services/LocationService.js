import * as Location from 'expo-location';

class LocationService {
  static getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      throw new Error('Permission to access location was denied');
    }

    let location = await Location.getLastKnownPositionAsync();
    return location.coords;
  };

  static getRecentLocations = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      throw new Error('Permission to access location was denied');
    }

    let { locations } = await Location.getBackgroundLocationAsync();
    return locations.map(location => location.coords);
  };
}

export default LocationService;
