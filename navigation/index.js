import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, NavigatorScreen} from '../screens';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const loginState = useSelector(state => state.login.isUserLoggedIn);

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
    <Stack.Navigator>{loginState ? mainStack() : authStack()}</Stack.Navigator>
  );
};

export default Navigator;
