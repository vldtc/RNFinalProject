import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

const CustomTextInput = props => {
  const [focusState, setFocusState] = useState(false);

  const animatedHeight = useRef(new Animated.Value(0)).current;

  const animatedBorder = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: focusState ? 40 : 2,
      duration: 300,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedBorder, {
      toValue: focusState ? 10 : 0,
      duration: 300,
      delay: 100,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
  }, [focusState]);

  return (
    <Animated.View
      style={[
        styles.containerStyle,
        props.styles,
        {
          borderRadius: 0,
        },
      ]}>
      <View>
        <FontAwesomeIcon
          icon={faUser}
          size={20}
          style={[styles.icon, {color: '#fff'}]}
        />
      </View>
      <TextInput
        onFocus={() => {
          setFocusState(true);
        }}
        onBlur={() => {
          setFocusState(false);
        }}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangedText}
        placeholder={props.placeholder}
        placeholderTextColor={'#000'}
        style={[styles.inputStyle, {transform: [{translateX: 0}]}]}
      />
      <Animated.View
        style={[
          styles.backgroundFocus,
          {height: animatedHeight, borderRadius: animatedBorder},
        ]}
      />
      {/* <Text style={styles.placeholder}>{props.placeholder}</Text> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '80%',
    marginBottom: 12,
  },
  backgroundFocus: {
    position: 'absolute',
    backgroundColor: '#007bff',
    width: '100%',
    alignSelf: 'flex-end',
    zIndex: -1,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 12,
    paddingStart: 16,
  },
  placeholder: {
    position: 'absolute',
    marginStart: 44,
    color: '#007bff',
    //transform: [{translateY: -20}],
  },
  icon: {
    transform: [{translateX: 8}],
  },
});

export default CustomTextInput;
