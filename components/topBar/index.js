import {
  View,
  Text,
  StyleSheet,
  Platform,
  NativeModules,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateDrawerState} from '../../features/drawerReducer/drawerReducer';
import {updateLoginState} from '../../features/loginReducer/loginReducer';
const {StatusBarManager} = NativeModules;
import auth from '@react-native-firebase/auth';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faX} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next';

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const TopBarItem = () => {
  const dispatch = useDispatch();
  const drawerState = useSelector(state => state.drawer.drawerState);
  const currentScreen = useSelector(state => state.drawer.currentScreen);

  const animatedRotation = useRef(new Animated.Value(0)).current;
  const animatedTranslation = useRef(new Animated.Value(0)).current;

  const {t} = useTranslation();

  useEffect(() => {
    Animated.timing(animatedRotation, {
      toValue: drawerState ? 15 : 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedTranslation, {
      toValue: drawerState ? -10 : 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [drawerState]);

  const interpolatedRotation = animatedRotation.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '-10deg'],
  });

  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.topBarContainer}>
      <View style={styles.topBarRow}>
        <AnimatedTouchableOpacity
          style={{
            flex: 1,
            textAlign: 'left',
            transform: [
              {rotate: interpolatedRotation},
              {translateY: animatedTranslation},
            ],
          }}
          onPress={() => {
            dispatch(updateDrawerState());
          }}>
          <FontAwesomeIcon icon={drawerState ? faX : faBars} />
        </AnimatedTouchableOpacity>
        <Text style={styles.titleText}>{t(currentScreen)}</Text>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            dispatch(updateLoginState(false));
            auth().signOut();
          }}>
          <Text style={{textAlign: 'right'}}>{t('signOut')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: '#00aeff',
    borderTopStartRadius: Platform.OS === 'ios' ? 52 : 10,
    borderTopEndRadius: Platform.OS === 'ios' ? 52 : 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    width: '97.5%',
    marginTop: 5,
    paddingHorizontal: 16,
  },
  topBarRow: {
    marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  titleText: {
    flex: 2,
    color: '#fff',
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default TopBarItem;
