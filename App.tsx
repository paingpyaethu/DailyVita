import 'react-native-gesture-handler';

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ApplicationNavigator from '@/navigation/Application';
import {Provider} from 'react-redux';
import {persistor, store} from '@/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
