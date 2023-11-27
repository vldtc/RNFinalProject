import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';

const DashScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 51.509865,
          longitude: -0.118092,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
    margin: 16,
  },
});

export default DashScreen;
