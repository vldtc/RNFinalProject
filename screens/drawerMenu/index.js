import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const DrawerMenu = () => {
  return (
    <View style={styles.drawerView}>
      <Text>Home</Text>
      <Text>Dashboard</Text>
      <Text>Settings</Text>
      <Text>AboutMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#00bbff',
    justifyContent: 'center',
    padding: 16,
  },
});
export default DrawerMenu;
