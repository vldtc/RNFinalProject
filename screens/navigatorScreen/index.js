import {View, Platform, StyleSheet, Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {DrawerMenu, HomeScreen, DashScreen, AboutMeScreen} from '../index';
import {TopBarItem} from '../../components';
import {useSelector} from 'react-redux';

const NavigatorScreen = () => {
  const drawerState = useSelector(state => state.drawer.drawerState);
  const currentScreen = useSelector(state => state.drawer.currentScreen);

  const translateDirection = useRef(
    new Animated.Value(drawerState ? 150 : 0),
  ).current;

  const scale = useRef(new Animated.Value(drawerState ? 0.8 : 1)).current;

  const rotation = useRef(new Animated.Value(drawerState ? 15 : 0)).current;

  const borderRadius = useRef(
    new Animated.Value(drawerState ? (Platform.OS === 'ios' ? 52 : 10) : 0),
  ).current;

  const platformBorderRadius = Platform.OS === 'ios' ? 52 : 10;
  const endPlatformBorderRadius = Platform.OS === 'ios' ? 52 : 0;

  const easing = Easing.cubic;

  useEffect(() => {
    Animated.timing(translateDirection, {
      toValue: drawerState ? 150 : 0,
      duration: 500,
      easing: easing,
      useNativeDriver: false,
    }).start();
    Animated.timing(scale, {
      toValue: drawerState ? 0.8 : 1,
      duration: 500,
      easing: easing,
      useNativeDriver: false,
    }).start();
    Animated.timing(rotation, {
      toValue: drawerState ? 15 : 0,
      duration: 500,
      easing: easing,
      useNativeDriver: false,
    }).start();
    Animated.timing(borderRadius, {
      toValue: drawerState ? platformBorderRadius : endPlatformBorderRadius,
      duration: 500,
      easing: easing,
      useNativeDriver: false,
    }).start();
  }, [drawerState]);

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 15],
    outputRange: ['0deg', '15deg'],
  });

  return (
    <View style={styles.screenStyle}>
      <DrawerMenu />
      <Animated.View
        style={[
          styles.screenView,
          {
            transform: [
              {translateX: translateDirection},
              {translateY: translateDirection},
              {scaleY: scale},
              {scaleX: scale},
              {rotate: interpolatedRotation},
            ],
            borderRadius: borderRadius,
            shadowOpacity: 0.5,
          },
        ]}>
        <TopBarItem />
        {(() => {
          switch (currentScreen) {
            case 'Home':
              return <HomeScreen />;
            case 'Dashboard':
              return <DashScreen />;
            case 'About Me':
              return <AboutMeScreen />;
            default:
              return null; // or some default component
          }
        })()}
      </Animated.View>
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
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowRadius: 5,
    elevation: 10,
  },
});

export default NavigatorScreen;
