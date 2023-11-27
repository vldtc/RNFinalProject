import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TopBarItem} from '../../components';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const userProfile = useSelector(state => state.login.userDetails);
  return (
    <View style={styles.container}>
      <TopBarItem />
      <Text>ProfileScreen</Text>
      <Text>
        {userProfile.firstName} {userProfile.lastName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default ProfileScreen;
