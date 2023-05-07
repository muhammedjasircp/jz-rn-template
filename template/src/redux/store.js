import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import sampleReducer from '@slices/sampleSlice';
import authReducer from '@slices/authSlice';

const rootReducer = combineReducers({
  sample: sampleReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [],
});
export default store;
export const Persistor = persistStore(store);
