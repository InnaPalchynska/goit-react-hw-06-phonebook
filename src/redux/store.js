import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contacts from './reducer';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};
console.log(contacts);
const persistedContacts = persistReducer(persistConfig, contacts);
console.dir(persistedContacts);
const rootReducer = combineReducers({
  contacts: persistedContacts,
});
const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  store,
  persistor,
};
