import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-native-date-picker';
import {useTranslation} from 'react-i18next';

const CustomDatePicker = props => {
  const {value, placeholder, onChangedText, error} = props;

  const {t} = useTranslation();

  const [focusState, setFocusState] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateSelected, setDateSelected] = useState(false);

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

  const handleDateChange = newDate => {
    setDate(newDate);
    setDateSelected(true);
    const formattedDate = formatDate(newDate);
    props.onChangedText(formattedDate);
  };

  const handleConfirm = () => {
    setPickerOpen(false);
  };

  const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

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
      <View>
        <FontAwesomeIcon
          icon={faCalendarDays}
          size={20}
          style={[styles.icon, {color: focusState ? 'white' : 'black'}]}
        />
      </View>
      <TextInput
        onPressIn={() => {
          if (focusState) setPickerOpen(true);
        }}
        value={dateSelected ? formatDate(date) : ''}
        onFocus={() => {
          setFocusState(true);
          setPickerOpen(true);
        }}
        onBlur={() => {
          setFocusState(false);
        }}
        placeholder={placeholder}
        placeholderTextColor={focusState ? 'white' : 'black'}
        onChangeText={onChangedText}
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
      <DatePicker
        modal
        open={pickerOpen}
        date={date}
        onConfirm={date => {
          handleDateChange(date);
          handleConfirm();
        }}
        onCancel={() => {
          setPickerOpen(false);
        }}
        androidVariant="iosClone"
        mode="date"
        textColor="#007bff"
        title={t('age')}
      />
    </View>
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
  icon: {
    transform: [{translateX: 8}],
  },
});

export default CustomDatePicker;
