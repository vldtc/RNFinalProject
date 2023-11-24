import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {store} from './store';
import {Provider} from 'react-redux';
import i18n from './i18n';
import {I18nextProvider} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </Provider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
