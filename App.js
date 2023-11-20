import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {store} from './store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
