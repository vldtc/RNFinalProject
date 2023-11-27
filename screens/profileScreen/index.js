import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TopBarItem} from '../../components';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const userProfile = useSelector(state => state.login.userDetails);
  return (
    <View style={styles.container}>
      <TopBarItem />
      <View style={styles.profileContainer}>
        <Text>
          {userProfile.firstName} {userProfile.lastName}
        </Text>
        <Text>{userProfile.email}</Text>
        <Text>{userProfile.gender}</Text>
        <Text>{userProfile.userColor}</Text>
        <Text>{userProfile.userLocation}</Text>
        <Text>{userProfile.age}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 1,
    width: '95%',
    borderRadius: 50,
    margin: 16,
    backgroundColor: '#fff000',
    alignItems: 'center',
    padding: 16,
  },
});

export default ProfileScreen;
