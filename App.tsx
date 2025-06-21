import 'react-native-gesture-handler';

import React from 'react';
import ApplicationNavigator from '@/navigation/Application';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <ApplicationNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
