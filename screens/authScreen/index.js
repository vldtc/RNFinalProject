import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {CustomTextInput} from '../../components';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const animatedTranslationY = screenHeight * 0.6;

const AuthScreen = () => {
  const [loginState, setLoginState] = useState(true);

  const registerTextStyle = loginState
    ? styles.textStyle
    : styles.registerTextStyle;

  const translateY = useRef(
    new Animated.Value(loginState ? animatedTranslationY : 0),
  ).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: loginState ? animatedTranslationY : 0,
      duration: 500,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
  }, [loginState]);

  return (
    <LinearGradient colors={['#00bbff', '#001eff']} style={styles.screenView}>
      <View
        style={{
          height: '35%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.logoStyle}>Map My Friends</Text>
      </View>
      <View style={styles.authContainer}>
        <Text style={styles.registerTextStyle}>Login</Text>
        <CustomTextInput />
      </View>
      <Animated.View
        style={[styles.authContainer, {transform: [{translateY: translateY}]}]}>
        <Text style={[registerTextStyle]}>
          {loginState
            ? "If you don't have an account, register here!"
            : 'Register'}
        </Text>
        <TouchableOpacity
          style={{padding: 16}}
          onPress={() => {
            setLoginState(!loginState);
          }}>
          <Text>Animate</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screenView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    padding: 16,
  },
  authContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: screenHeight * 0.7,
    width: screenWidth,
    bottom: 0,
    alignSelf: 'center',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoStyle: {
    fontSize: 50,
    fontWeight: '200',
    color: 'white',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '200',
    marginTop: 8,
  },
  registerTextStyle: {
    fontSize: 30,
    fontWeight: '200',
    marginTop: 16,
  },
});

export default AuthScreen;
