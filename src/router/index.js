import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../pages/Home';
import TambahKontak from '../pages/TambahKontak';


const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahKontak"
        component={TambahKontak}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
