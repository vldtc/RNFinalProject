import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Modal,
} from 'react-native';
import ColorPicker, {Panel1, HueSlider, Preview} from 'reanimated-color-picker';
import React, {useState, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaintBrush, faDroplet} from '@fortawesome/free-solid-svg-icons';

const CustomColorPick = props => {
  const {t} = useTranslation();

  const [currentSelection, setCurrentSelection] = useState(props.colors[0]);
  const [customColor, setCustomColor] = useState('undefined');

  const [showPickerModal, setShowPickerModal] = useState(false);

  const onSelectColor = ({hex}) => {
    setCustomColor(hex);
    props.onColorChange(customColor);
  };

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
        toValue: currentSelection === color ? 1 : 0.1,
        duration: 300,
        easing: Easing.bounce,
        useNativeDriver: false,
      }).start();
    });
  }, [currentSelection]);

  useEffect(() => {
    props.onColorChange(currentSelection);
  }, []);

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
        {props.colors.map((color, index) => (
          <TouchableOpacity
            style={[styles.elementContainerStyle]}
            onPress={() => {
              if (
                props.colors[props.colors.length - 1] === 'custom' &&
                index === props.colors.length - 1
              ) {
                setCurrentSelection(color);
                setShowPickerModal(true);
              } else {
                setCurrentSelection(color);
                props.onColorChange(color);
              }
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor:
                  props.colors[props.colors.length - 1] === 'custom' &&
                  index === props.colors.length - 1
                    ? customColor
                    : color,
                borderRadius: 8,
                borderColor: '#2a2a2a',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{scale: 0.8}],
              }}>
              {props.colors[props.colors.length - 1] === 'custom' &&
                props.colors.length - 1 === index && (
                  <FontAwesomeIcon icon={faPaintBrush} />
                )}
            </View>
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
      <Modal visible={showPickerModal} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ColorPicker
              style={{
                width: '90%',
              }}
              value="red"
              onComplete={onSelectColor}
              onChange={({hex}) => setCustomColor(hex)}>
              <Preview style={{marginBottom: 24}} hideInitialColor />
              <Panel1 style={{marginBottom: 24}} />
              <HueSlider />
            </ColorPicker>
            <TouchableOpacity
              style={{
                marginTop: 24,
                backgroundColor: '#007bff',
                paddingHorizontal: 24,
                paddingVertical: 8,
                borderRadius: 10,
              }}
              onPress={() => {
                setShowPickerModal(false);
              }}>
              <Text style={{color: 'white'}}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  modalView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: 24,
  },
});

export default CustomColorPick;
