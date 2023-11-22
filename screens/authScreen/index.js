import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {CustomTextInput, CustomButton} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import AuthHelper from '../../helpers/AuthHelper';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const animatedTranslationY = screenHeight * 0.75;
const animatedTranslationYLogo =
  Platform.OS === 'android' ? -(screenHeight * 0.12) : -(screenHeight * 0.09);

const AuthScreen = () => {
  //Login State for Register Modal
  const [loginState, setLoginState] = useState(true);

  //Login Redux
  const announcement = useSelector(state => state.login.announcement);
  const dispatch = useDispatch();

  //Text Inputs for Login
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  //Text Inputs for Register
  const [emailRegister, setEmailRegister] = useState('');
  const [passRegister, setPassRegister] = useState('');
  const [passConfRegister, setPassConfRegister] = useState('');
  const [ageRegister, setAgeRegister] = useState('');
  const [fNameRegister, setFNameRegister] = useState('');
  const [lNameRegister, setLNameRegister] = useState('');
  const [genderRegister, setGenderRegister] = useState('');
  const [userColorRegister, setUserColorRegister] = useState('');
  const [userLocationRegister, setUserLocationRegister] = useState('');

  const registerTextStyle = loginState
    ? styles.textStyle
    : styles.registerTextStyle;

  const translateY = useRef(new Animated.Value(0)).current;

  const translateYLogo = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: loginState ? animatedTranslationY : 0,
      duration: 500,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
    Animated.timing(translateYLogo, {
      toValue: loginState
        ? Platform.OS === 'ios'
          ? -30
          : -40
        : animatedTranslationYLogo,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  }, [loginState]);

  return (
    //Screen
    <LinearGradient colors={['#00bbff', '#001eff']} style={styles.screenView}>
      {/* Logo Container */}
      <View
        style={{
          height: '35%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Text
          style={[
            styles.logoStyle,
            {transform: [{translateY: translateYLogo}]},
          ]}>
          Map My Friends
        </Animated.Text>
      </View>
      {/* Login Container */}
      <View style={[styles.authContainer, {height: screenHeight * 0.7}]}>
        <Text style={styles.registerTextStyle}>Login</Text>
        <View style={{height: 24}} />
        <Text>{announcement}</Text>
        <CustomTextInput
          secureTextEntry={false}
          placeholder="Email"
          onChangedText={text => {
            setEmail(text);
          }}
        />
        <CustomTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangedText={text => {
            setPass(text);
          }}
        />
        <CustomButton
          title="Login"
          onPress={() => {
            AuthHelper.signInUser(dispatch, email, pass);
          }}
        />
      </View>
      {/* Register Container */}
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
        {Platform.OS === 'ios' ? <View style={{height: 24}} /> : null}
        <CustomTextInput
          secureTextEntry={false}
          placeholder="Email"
          onChangedText={text => {
            setEmailRegister(text);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <CustomTextInput
            styles={{width: '48.5%'}}
            secureTextEntry={false}
            placeholder="First name"
            onChangedText={text => {
              setFNameRegister(text);
            }}
          />
          <CustomTextInput
            styles={{width: '48.5%'}}
            secureTextEntry={false}
            placeholder="Last name"
            onChangedText={text => {
              setLNameRegister(text);
            }}
          />
        </View>
        <CustomTextInput
          secureTextEntry={false}
          placeholder="Age"
          onChangedText={text => {
            setAgeRegister(text);
          }}
        />
        <CustomTextInput
          secureTextEntry={false}
          placeholder="Gender"
          onChangedText={text => {
            setGenderRegister(text);
          }}
        />
        <CustomTextInput
          secureTextEntry={false}
          placeholder="User color"
          onChangedText={text => {
            setUserColorRegister(text);
          }}
        />
        <CustomTextInput
          secureTextEntry={false}
          placeholder="User location"
          onChangedText={text => {
            setUserLocationRegister(text);
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <CustomTextInput
            styles={{width: '48.5%'}}
            secureTextEntry={true}
            placeholder="Password"
            onChangedText={text => {
              setPassRegister(text);
            }}
          />
          <CustomTextInput
            styles={{width: '48.5%'}}
            secureTextEntry={true}
            placeholder="Confirm password"
            onChangedText={text => {
              setPassConfRegister(text);
            }}
          />
        </View>

        <CustomButton title="Register" onPress={() => {}} />
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
    height: screenHeight * 0.85,
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
