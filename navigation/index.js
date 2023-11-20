import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const authStack = () => {
    return (
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Group>
    );
  };

  const mainStack = () => {
    return (
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? mainStack() : authStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
