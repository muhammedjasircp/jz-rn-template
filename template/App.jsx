import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { AppNavigator } from "@navigation/appNavigator";
import store, { Persistor } from "@redux/store";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persistor}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
