import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Soundgarden from './soundgarden';
import Nirvana from './nirvana';
import AliceInChains from './aliceinchains';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nirvana" component={Nirvana} />
        <Stack.Screen name="Soundgarden" component={Soundgarden} />
        <Stack.Screen name="Alice in Chains" component={AliceInChains} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
