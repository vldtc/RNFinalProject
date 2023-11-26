import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import FirestoreHelper from '../../helpers/FirestoreHelper';

const HomeScreen = () => {
  const addUser = async userProfile => {
    try {
      await FirestoreHelper.addUser(userProfile);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Add user"
        onPress={() => {
          addUser({
            age: '20',
            author: 'Vldt',
            email: 'testing@vlad.com',
            firstName: 'Testing',
            gender: 'male',
            lastName: 'Vlad',
            userColor: '#fff000',
            userId: 'somethinbgaoipwdjioaw19034123',
            userLocation: 'Buzau, Romania',
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
