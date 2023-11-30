import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  Text,
  Modal,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCircleInfo,
  faThumbsDown,
  faTicket,
  faX,
} from '@fortawesome/free-solid-svg-icons';

const CustomLocation = props => {
  const {
    value,
    placeholder,
    icon,
    secureTextEntry,
    onChangedText,
    error,
    isLowerError,
  } = props;

  const [focusState, setFocusState] = useState(false);
  const [infoState, setInfoState] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {}, [focusState]);

  return (
    <Animated.View
      style={[
        styles.containerStyle,
        props.styles,
        {
          borderRadius: 0,
        },
      ]}>
      {error && error.message.length > 0 && (
        <Text
          style={{
            position: 'absolute',
            top: isLowerError ? 44 : -18,
            marginStart: 8,
            fontWeight: '200',
            color: '#ff0000',
          }}>
          {error.message}
        </Text>
      )}
      <View>
        <FontAwesomeIcon
          icon={icon}
          size={20}
          style={[styles.icon, {color: 'black'}]}
        />
      </View>
      <TouchableOpacity style={styles.inputStyle}>
        <Text>Allow location access</Text>
      </TouchableOpacity>
      {props.infoVisible && (
        <TouchableOpacity
          style={styles.iconRight}
          onPress={() => {
            setInfoState(true);
          }}>
          <FontAwesomeIcon icon={faCircleInfo} style={{color: 'black'}} />
        </TouchableOpacity>
      )}
      <Animated.View
        style={[
          styles.backgroundFocus,
          {
            height: 2,
            width: '100%',
            borderRadius: 0,
          },
        ]}
      />
      <Modal visible={infoState} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.infoHeader}>{props.infoHeader}</Text>
            <Text style={styles.infoBody}>{props.infoTitle}</Text>
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
              <Text style={{color: 'white'}}>Close!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  infoFocus: {
    backgroundColor: '#007bff',
    width: '80%',
    height: 'auto',
    borderRadius: 10,
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
    paddingStart: 16,
    marginHorizontal: 16,
  },
  icon: {
    transform: [{translateX: 8}],
  },
  iconRight: {
    paddingHorizontal: 4,
    paddingVertical: 12,
    transform: [{translateX: -4}],
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
    width: '90%',
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
  infoHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  infoBody: {
    fontWeight: '200',
  },
});

export default CustomLocation;
