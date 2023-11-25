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
import {
  faPaintBrush,
  faDroplet,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const CustomColorPick = props => {
  const {value, colors, onColorChange, error} = props;

  const {t} = useTranslation();

  const [currentSelection, setCurrentSelection] = useState(colors[0]);
  const [customColor, setCustomColor] = useState('undefined');

  const [showPickerModal, setShowPickerModal] = useState(false);
  const [infoState, setInfoState] = useState(false);

  const onSelectColor = ({hex}) => {
    setCustomColor(hex);
    onColorChange(customColor);
  };

  const animatedValues = Object.fromEntries(
    colors.map(option => [
      option,
      {
        height: useRef(new Animated.Value(0)).current,
        border: useRef(new Animated.Value(0)).current,
        scale: useRef(new Animated.Value(0)).current,
      },
    ]),
  );

  useEffect(() => {
    colors.forEach(color => {
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
    onColorChange(currentSelection);
  }, []);

  return (
    <View style={styles.overallContainerStyle}>
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
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faDroplet} />
          <Text style={{marginStart: 8}}>{t('userColor')}</Text>
        </View>
        {props.infoVisible && (
          <TouchableOpacity
            style={styles.iconRight}
            onPress={() => {
              setInfoState(true);
            }}>
            <FontAwesomeIcon icon={faCircleInfo} style={{color: 'black'}} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.containerStyle}>
        {colors.map((color, index) => (
          <TouchableOpacity
            style={[styles.elementContainerStyle]}
            onPress={() => {
              if (
                colors[colors.length - 1] === 'custom' &&
                index === colors.length - 1
              ) {
                setCurrentSelection(color);
                setShowPickerModal(true);
              } else {
                setCurrentSelection(color);
                onColorChange(color);
              }
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                backgroundColor:
                  colors[colors.length - 1] === 'custom' &&
                  index === colors.length - 1
                    ? customColor
                    : color,
                borderRadius: 8,
                borderColor: '#2a2a2a',
                borderWidth: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{scale: 0.8}],
              }}>
              {colors[colors.length - 1] === 'custom' &&
                colors.length - 1 === index && (
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
      <Modal visible={infoState} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.infoHeader}>{props.infoHeader}</Text>
            <Text style={styles.infoBody}>{props.infoBody}</Text>
            <TouchableOpacity
              style={{
                marginTop: 24,
                backgroundColor: '#007bff',
                paddingHorizontal: 24,
                paddingVertical: 8,
                borderRadius: 10,
              }}
              onPress={() => {
                setInfoState(false);
              }}>
              <Text style={{color: 'white'}}>{t('close')}</Text>
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
    padding: 24,
  },
  iconRight: {
    padding: 6,
    marginStart: 6,
  },
  infoHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  infoBody: {
    fontWeight: '200',
  },
});

export default CustomColorPick;
