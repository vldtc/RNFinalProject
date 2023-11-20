import {View, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {DrawerMenu} from '../index';
import {TopBarItem} from '../../components';

const NavigatorScreen = () => {
  return (
    <View style={styles.screenStyle}>
      <DrawerMenu />
      <View style={styles.screenView}>
        <TopBarItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
  },
  screenView: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginLeft: 0,
    alignItems: 'center',
    // transform: [
    //   {translateX: 150},
    //   {translateY: 150},
    //   {scaleY: 0.8},
    //   {scaleX: 0.8},
    //   {rotate: '15deg'},
    // ],
    // borderRadius: Platform.OS === 'ios' ? 50 : 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: -5,
    //   height: 5,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 5,

    // elevation: 5,
  },
});

export default NavigatorScreen;
