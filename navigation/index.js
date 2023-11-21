import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, NavigatorScreen} from '../screens';

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
        <Stack.Screen name="Navigator" component={NavigatorScreen} />
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
