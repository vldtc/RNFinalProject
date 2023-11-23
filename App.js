import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';
import {store} from './store';
import {Provider} from 'react-redux';
import i18n from './i18n';
import {I18nextProvider} from 'react-i18next';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
