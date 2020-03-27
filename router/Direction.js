import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();
const Direction = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Sign In - Welcome to Title App'}}
        />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Direction;
