import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useMemo, useCallback} from 'react';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateMarkers,
  updateAllUsers,
} from '../../features/loginReducer/loginReducer';
import FirestoreHelper from '../../helpers/FirestoreHelper';
import {CustomMarker} from '../../components';
import BottomSheet, {TouchableOpacity} from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {updateIsOutsideDrawer} from '../../features/drawerReducer/drawerReducer';

const DashScreen = () => {
  const dispatch = useDispatch();
  const allMarkers = useSelector(state => state.login.allMarkers);
  const allUsers = useSelector(state => state.login.allUsersDetails);

  const navigation = useNavigation();

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['8%', '70%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const fetchMarkers = async () => {
    try {
      const markers = await FirestoreHelper.getAllMarkers();
      dispatch(updateMarkers(markers));
    } catch (error) {
      console.error('Error fetching markers:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const users = await FirestoreHelper.getAllUsers();
      dispatch(updateAllUsers(users));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
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
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 16,
          }}>
          <Text style={styles.textStyle}>See all markers</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddMarker');
              dispatch(updateIsOutsideDrawer());
            }}>
            <Text>Add marker</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={allMarkers}
          renderItem={({item, index}) => {
            const user =
              allUsers && allUsers.length > 0
                ? allUsers.find(user => user.userId === item.userId)
                : null;
            return (
              <View
                style={[
                  styles.locationContainer,
                  {backgroundColor: user.userColor},
                ]}>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 8,
                    borderRadius: 5,
                    alignItems: 'center',
                  }}>
                  <Text>
                    {user.firstName} {user.lastName}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 8,
                    borderRadius: 5,
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text>{item.userLocation}</Text>
                </View>
              </View>
            );
          }}
        />
      </BottomSheet>
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
  locationContainer: {
    padding: 16,
    margin: 8,
    borderRadius: 10,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '200',
    marginBottom: 16,
  },
});

export default DashScreen;
