import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector, useDispatch} from 'react-redux';
import {updateMarkers} from '../../features/loginReducer/loginReducer';
import FirestoreHelper from '../../helpers/FirestoreHelper';
import {CustomMarker} from '../../components';

const DashScreen = () => {
  const dispatch = useDispatch();
  const allMarkers = useSelector(state => state.login.allMarkers);
  const allUsers = useSelector(state => state.login.allUsersDetails);

  const fetchMarkers = async () => {
    try {
      const markers = await FirestoreHelper.getAllMarkers();
      dispatch(updateMarkers(markers));
    } catch (error) {
      console.error('Error fetching markers:', error);
    }
  };

  useEffect(() => {
    fetchMarkers();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 51.509865,
          longitude: -0.118092,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {allMarkers.map((element, index) => {
          // Check if allUsers is defined and not empty
          const user =
            allUsers && allUsers.length > 0
              ? allUsers.find(user => user.userId === element.userId)
              : null;

          return (
            <CustomMarker
              index={index}
              color={user.userColor}
              latitude={element.latitude}
              longitude={element.longitude}
              locationTitle={element.userLocation}
              fName={user.firstName}
              lName={user.lastName}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});

export default DashScreen;
