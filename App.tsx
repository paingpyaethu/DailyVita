import 'react-native-gesture-handler';

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ApplicationNavigator from '@/navigation/Application';

const App = () => {
  return (
    <GestureHandlerRootView>
      <ApplicationNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
