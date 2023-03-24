import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Shounen from './shounen';
import Shoujo from './shoujo';
import Seinen from './seinen';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shoujo" component={Shoujo} />
        <Stack.Screen name="Shounen" component={Shounen} />
        <Stack.Screen name="Seinen" component={Seinen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
