import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {AppNavigator} from '@navigation/appNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import store, {Persistor} from '@redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
