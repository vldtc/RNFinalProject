import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import FirestoreHelper from '../../helpers/FirestoreHelper';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
