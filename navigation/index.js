import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AuthScreen,
  NavigatorScreen,
  ProfileScreen,
  AddMarkerScreen,
  DashScreen,
} from '../screens';
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Dash" component={DashScreen} />
        <Stack.Screen name="AddMarker" component={AddMarkerScreen} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>{loginState ? mainStack() : authStack()}</Stack.Navigator>
  );
};

export default Navigator;
