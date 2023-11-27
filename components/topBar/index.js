import {
  View,
  Text,
  StyleSheet,
  Platform,
  NativeModules,
  TouchableOpacity,
  Animated,
  Easing,
  Alert,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateDrawerState} from '../../features/drawerReducer/drawerReducer';
const {StatusBarManager} = NativeModules;
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
          <FontAwesomeIcon
            icon={drawerState ? faX : faBars}
            color="white"
            size={20}
          />
        </AnimatedTouchableOpacity>
        <Text style={styles.titleText}>{t(currentScreen)}</Text>
        <TouchableOpacity
          style={{
            flex: 1,
          }}
          onPress={() => {
            Alert.alert('Profile to be implemented!');
          }}>
          <Text
            style={{
              marginEnd: 8,
              color: 'white',
              fontSize: 14,
              fontWeight: '200',
              alignSelf: 'flex-end',
            }}>
            {t('profile')}
          </Text>
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
  },
  topBarRow: {
    marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  titleText: {
    flex: 2,
    color: '#fff',
    fontSize: 26,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default TopBarItem;
