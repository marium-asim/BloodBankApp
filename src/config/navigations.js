// In App.js in a new project
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Profile from '../screens/Profile';
import Request from '../screens/Request';
import Donate from '../screens/Donate';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Give Blood Give Life" component={Menu} />
        <Stack.Screen name="My Profile" component={Profile} />
        <Stack.Screen name="Life Savers" component={Request} />
        <Stack.Screen name="Donate Blood" component={Donate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;