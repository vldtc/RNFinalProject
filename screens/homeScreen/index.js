import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import FirestoreHelper from '../../helpers/FirestoreHelper';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
  const userProfile = useSelector(state => state.login.userDetails);
  const dispatch = useDispatch();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Get User Data"
        onPress={() => {
          FirestoreHelper.getUserProfile(auth().currentUser.uid, dispatch);
        }}
      />
      <Text>{auth().currentUser.uid}</Text>
      <Text>
        {userProfile.firstName} {userProfile.lastName}
      </Text>
    </View>
  );
};

export default HomeScreen;
