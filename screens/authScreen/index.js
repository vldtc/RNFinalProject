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
import {
  CustomTextInput,
  CustomButton,
  CustomDatePicker,
  RadioButtonCustom,
  CustomColorPick,
} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import AuthHelper from '../../helpers/AuthHelper';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {
  faSignature,
  faLocationCrosshairs,
} from '@fortawesome/free-solid-svg-icons/';
import {useTranslation} from 'react-i18next';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Screen's dimensions
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const AuthScreen = () => {
  //i18n Locale
  const {t} = useTranslation();

  //Regex for validation!
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const lettersOnlyRegex = /^[A-Za-z]+$/;

  const required = t('req');

  //Screens platform specific sizes
  const animatedTranslationY = screenHeight * 0.75;
  const animatedTranslationYLogo =
    Platform.OS === 'android' ? -(screenHeight * 0.12) : -(screenHeight * 0.09);

  //Validation schema for Hook Form
  const schema = yup.object().shape({
    email: yup.string().required(required).matches(emailRegex, t('invEmail')),
    pass: yup.string().required(required),
  });

  const schemaRegister = yup.object().shape({
    emailRegister: yup
      .string()
      .required(required)
      .matches(emailRegex, t('invEmail')),
    fNameRegister: yup
      .string()
      .required(required)
      .matches(lettersOnlyRegex, t('lettersOnly')),

    lNameRegister: yup
      .string()
      .required(required)
      .matches(lettersOnlyRegex, t('lettersOnly')),

    dobRegister: yup.string().required(required),

    userLocationRegister: yup.string().required(required),

    passRegister: yup
      .string()
      .required(required)
      .matches(passwordRegex, t('invPass')),

    passConfirmRegister: yup
      .string()
      .required(required)
      .oneOf([yup.ref('passRegister'), null], t('passMatch')),
  });

  //Hook Form
  const {
    control: loginControl,
    handleSubmit: handleSubmitLogin,
    formState: {errors: loginErrors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      pass: '',
    },
  });

  const {
    control: registerControl,
    handleSubmit: handleSubmitRegister,
    formState: {errors: registerErrors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schemaRegister),
    defaultValues: {
      emailRegister: '',
      fNameRegister: '',
      lNameRegister: '',
      genderRegister: '',
      userColorRegister: '',
      userLocationRegister: '',
      passRegister: '',
      passConfirmRegister: '',
    },
  });

  console.log(loginErrors);
  console.log(registerErrors);

  //Login State for Register Modal
  const [loginState, setLoginState] = useState(true);

  //Login Redux
  const announcement = useSelector(state => state.login.announcement);
  const dispatch = useDispatch();

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
        <Text style={styles.registerTextStyle}>{t('login')}</Text>
        <View style={{height: 24}} />
        <Text>{announcement}</Text>
        <Controller
          control={loginControl}
          rules={{required: true, validate: true}}
          render={({field: {onChange, value}}) => {
            return (
              <CustomTextInput
                value={value}
                secureTextEntry={false}
                placeholder="Email"
                icon={faEnvelope}
                onChangedText={text => {
                  onChange(text);
                }}
                error={loginErrors.email}
              />
            );
          }}
          name="email"
        />
        <Controller
          control={loginControl}
          rules={{required: true, validate: false}}
          render={({field: {onChange, value}}) => {
            return (
              <CustomTextInput
                value={value}
                placeholder={t('pass')}
                icon={faLock}
                secureTextEntry={true}
                onChangedText={text => {
                  onChange(text);
                }}
                error={loginErrors.pass}
              />
            );
          }}
          name="pass"
        />

        <CustomButton
          title={t('login')}
          onPress={handleSubmitLogin(formData => {
            console.log(formData);
            AuthHelper.signInUser(dispatch, formData.email, formData.pass);
          })}
        />
      </View>
      {/* Register Container */}
      <Animated.View
        style={[styles.authContainer, {transform: [{translateY: translateY}]}]}>
        <Text style={[registerTextStyle]}>
          {loginState ? t('registerHelp') : t('register')}
        </Text>
        <TouchableOpacity
          style={{padding: 24}}
          onPress={() => {
            setLoginState(!loginState);
          }}>
          <Text>{loginState ? t('modalOpen') : t('modalClose')}</Text>
        </TouchableOpacity>
        {Platform.OS === 'ios' ? <View style={{height: 24}} /> : null}
        <Controller
          control={registerControl}
          rules={{required: true, validate: true}}
          render={({field: {onChange, value}}) => {
            return (
              <CustomTextInput
                value={value}
                secureTextEntry={false}
                icon={faEnvelope}
                placeholder="Email"
                onChangedText={text => {
                  onChange(text);
                }}
                error={registerErrors.emailRegister}
              />
            );
          }}
          name="emailRegister"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Controller
            control={registerControl}
            rules={{required: true, validate: true}}
            render={({field: {onChange, value}}) => {
              return (
                <CustomTextInput
                  value={value}
                  styles={{width: '48.5%'}}
                  secureTextEntry={false}
                  icon={faSignature}
                  placeholder={t('fName')}
                  onChangedText={text => {
                    onChange(text);
                  }}
                  error={registerErrors.fNameRegister}
                />
              );
            }}
            name="fNameRegister"
          />
          <Controller
            control={registerControl}
            rules={{required: true, validate: true}}
            render={({field: {onChange, value}}) => {
              return (
                <CustomTextInput
                  value={value}
                  styles={{width: '48.5%'}}
                  secureTextEntry={false}
                  icon={faSignature}
                  placeholder={t('lName')}
                  onChangedText={text => {
                    onChange(text);
                  }}
                  error={registerErrors.lNameRegister}
                />
              );
            }}
            name="lNameRegister"
          />
        </View>
        <Controller
          control={registerControl}
          rules={{required: true, validate: true}}
          render={({field: {onChange, value}}) => {
            return (
              <CustomDatePicker
                value={value}
                placeholder={t('age')}
                onChangedText={text => {
                  onChange(text);
                }}
                error={registerErrors.dobRegister}
              />
            );
          }}
          name="dobRegister"
        />
        <Controller
          control={registerControl}
          rules={{required: true, validate: true}}
          render={({field: {onChange, value}}) => {
            return (
              <RadioButtonCustom
                value={value}
                options={['Male', 'Female']}
                onCurrentSelection={gender => {
                  onChange(gender);
                }}
                error={registerErrors.genderRegister}
              />
            );
          }}
          name="genderRegister"
        />
        <Controller
          control={registerControl}
          rules={{required: true, validate: true}}
          render={({field: {onChange, value}}) => {
            return (
              <CustomColorPick
                value={value}
                colors={[
                  '#f8f8f8',
                  '#fff700',
                  '#0095ff',
                  '#e42600',
                  '#151515',
                  '#17c200',
                  'custom',
                ]}
                onColorChange={color => {
                  onChange(color);
                }}
                error={registerErrors.userColorRegister}
                infoVisible={true}
                infoHeader={t('colorInfo')}
                infoBody={t('colorInfoBody')}
              />
            );
          }}
          name="userColorRegister"
        />
        <Controller
          control={registerControl}
          rules={{required: true, validate: true}}
          render={({field: {onChange, value}}) => {
            return (
              <CustomTextInput
                value={value}
                secureTextEntry={false}
                icon={faLocationCrosshairs}
                placeholder={t('userLocation')}
                onChangedText={text => {
                  onChange(text);
                }}
                error={registerErrors.userLocationRegister}
              />
            );
          }}
          name="userLocationRegister"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <Controller
            control={registerControl}
            rules={{required: true, validate: true}}
            render={({field: {onChange, value}}) => {
              return (
                <CustomTextInput
                  value={value}
                  styles={{width: '48.5%'}}
                  secureTextEntry={true}
                  icon={faLock}
                  placeholder={t('pass')}
                  onChangedText={text => {
                    onChange(text);
                  }}
                  error={registerErrors.passRegister}
                  infoVisible={true}
                  infoHeader={t('passInfo')}
                  infoTitle={t('passInfoBody')}
                />
              );
            }}
            name="passRegister"
          />
          <Controller
            control={registerControl}
            rules={{required: true, validate: true}}
            render={({field: {onChange, value}}) => {
              return (
                <CustomTextInput
                  value={value}
                  styles={{width: '48.5%'}}
                  secureTextEntry={true}
                  icon={faLock}
                  placeholder={t('passConf')}
                  onChangedText={text => {
                    onChange(text);
                  }}
                  error={registerErrors.passConfirmRegister}
                />
              );
            }}
            name="passConfirmRegister"
          />
        </View>

        <CustomButton
          title={t('register')}
          onPress={handleSubmitRegister(formData => {
            console.log(formData);
            //AuthHelper.signInUser(dispatch, formData.email, formData.pass);
          })}
        />
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
