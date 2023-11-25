import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

const RadioButtonCustom = props => {
  const {value, options, onCurrentSelection, error} = props;

  const {t} = useTranslation();

  //const options = ['Male', 'Female'];
  const [currentSelection, setCurrentSelection] = useState('Male');

  const animatedValues = Object.fromEntries(
    props.options.map(option => [
      option,
      {
        height: useRef(new Animated.Value(0)).current,
        border: useRef(new Animated.Value(0)).current,
      },
    ]),
  );

  useEffect(() => {
    props.onCurrentSelection(currentSelection);
  });

  useEffect(() => {
    props.options.forEach(element => {
      Animated.timing(animatedValues[element].height, {
        toValue: currentSelection === element ? 40 : 2,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedValues[element].border, {
        toValue: currentSelection === element ? 10 : 0,
        duration: 300,
        delay: 100,
        easing: Easing.circle,
        useNativeDriver: false,
      }).start();
    });
  }, [currentSelection]);

  return (
    <View style={styles.containerStyle}>
      {error && error.message.length > 0 && (
        <Text
          style={{
            position: 'absolute',
            top: -18,
            marginStart: 8,
            fontWeight: '200',
            color: '#ff0000',
          }}>
          {error.message}
        </Text>
      )}
      {props.options.map((element, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setCurrentSelection(element);
            props.onCurrentSelection(element);
          }}
          activeOpacity={1}
          style={styles.elementContainerStyle}>
          <Text
            style={{color: currentSelection === element ? 'white' : 'black'}}>
            {t(element)}
          </Text>
          <Animated.View
            style={[
              styles.backgroundFocus,
              {
                height: animatedValues[element].height,
                borderRadius: animatedValues[element].border,
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '85%',
    marginBottom: 24,
  },
  elementContainerStyle: {
    flex: 1,
    height: '100%',
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundFocus: {
    position: 'absolute',
    backgroundColor: '#007bff',
    width: '100%',
    bottom: 0,
    zIndex: -1,
  },
});

export default RadioButtonCustom;
