import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

const CustomTextInput = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={[styles.iconContainer, {transform: [{translateX: 0}]}]}>
        <FontAwesomeIcon icon={faUser} size={20} style={styles.iconStyle} />
      </View>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        onChangeText={props.onChangedText}
        style={[styles.inputStyle, {transform: [{translateX: 0}]}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 14,
    backgroundColor: '#fff000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {},
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  inputStyle: {
    width: 200,
    height: 40,
    marginStart: 16,
    backgroundColor: '#fff000',
    borderRadius: 14,
    paddingHorizontal: 16,
  },
});

export default CustomTextInput;
