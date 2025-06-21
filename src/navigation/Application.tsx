import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '@/navigation/types';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {OnboardingFlowScreen} from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#d3f3e5'}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="OnboardingFlowScreen"
              component={OnboardingFlowScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
};

export default ApplicationNavigator;
