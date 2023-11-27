import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TopBarItem} from '../../components';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <TopBarItem />
      <Text>ProfileScreen</Text>
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
