import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  Text,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CustomTextInput = props => {
  const [focusState, setFocusState] = useState(false);

  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedBorder = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: focusState ? 40 : 2,
      duration: 500,
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
          icon={props.icon}
          size={20}
          style={[styles.icon, {color: focusState ? 'white' : 'black'}]}
        />
      </View>
      <TextInput
        onFocus={() => {
          setFocusState(true);
        }}
        onBlur={() => {
          setFocusState(false);
        }}
        placeholder={props.placeholder}
        placeholderTextColor={focusState ? 'white' : 'black'}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangedText}
        style={[
          styles.inputStyle,
          {transform: [{translateX: 0}], color: focusState ? 'white' : 'black'},
        ]}
      />
      <Animated.View
        style={[
          styles.backgroundFocus,
          {
            height: animatedHeight,
            width: '100%',
            borderRadius: animatedBorder,
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '80%',
    marginBottom: 24,
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
    width: '100%',
    position: 'absolute',
    marginStart: 36,
    color: '#000000',
    zIndex: -1,
  },
  icon: {
    transform: [{translateX: 8}],
  },
});

export default CustomTextInput;
