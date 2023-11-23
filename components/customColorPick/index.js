import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {width} from '@fortawesome/free-solid-svg-icons/faUser';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faD, faDroplet} from '@fortawesome/free-solid-svg-icons';

const CustomColorPick = props => {
  const {t} = useTranslation();

  const [currentSelection, setCurrentSelection] = useState('white');

  const animatedValues = Object.fromEntries(
    props.colors.map(option => [
      option,
      {
        height: useRef(new Animated.Value(0)).current,
        border: useRef(new Animated.Value(0)).current,
        scale: useRef(new Animated.Value(0)).current,
      },
    ]),
  );

  useEffect(() => {
    props.colors.forEach(color => {
      Animated.timing(animatedValues[color].height, {
        toValue: currentSelection === color ? 40 : 2,
        duration: 300,
        easing: Easing.bounce,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedValues[color].border, {
        toValue: currentSelection === color ? 10 : 0,
        duration: 300,
        easing: Easing.circle,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedValues[color].scale, {
        toValue: currentSelection === color ? 0.9 : 0.1,
        duration: 300,
        easing: Easing.bounce,
        useNativeDriver: false,
      }).start();
    });
  }, [currentSelection]);

  return (
    <View style={styles.overallContainerStyle}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <FontAwesomeIcon icon={faDroplet} />
        <Text style={{marginStart: 8}}>{t('userColor')}</Text>
        <Text> - {t('userColorInfo')}</Text>
      </View>
      <View style={styles.containerStyle}>
        {props.colors.map(color => (
          <TouchableOpacity
            style={[styles.elementContainerStyle]}
            onPress={() => {
              setCurrentSelection(color);
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: color,
                borderRadius: 8,
                borderColor: 'black',
                borderWidth: 0.5,
                transform: [{scale: 0.8}],
              }}
            />
            <Animated.View
              style={[
                styles.backgroundFocus,
                {
                  height: animatedValues[color].height,
                  borderRadius: animatedValues[color].border,
                  transform: [{scale: animatedValues[color].scale}],
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overallContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
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
    zIndex: -1,
  },
});

export default CustomColorPick;
