import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { View, Text } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location';

import { styles } from './styles';

export default function App() {
  const [location, setLocation] = useState(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);

      console.log("localização atual => ", currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    const watchId = watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1
      },
      (newLocation) => {
        console.log("Nova localização", newLocation); // 'newLocation' é o dado correto
        setLocation(newLocation);
      }
    );

    // Cleanup to stop watching location when the component unmounts
    return () => watchId.remove();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsUserLocation={true} // Mostra a localização do usuário no mapa
          followsUserLocation={true} // Faz o mapa seguir a localização do usuário
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Você está aqui"
          />
        </MapView>
      ) : (
        <Text>Carregando localização...</Text> // Exibe uma mensagem enquanto a localização não for carregada
      )}
    </View>
  );
}
