import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Rotainterna from './pages/rotainterna';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator initialRouteName="BemVindo">
            <Stack.Screen
                name="BemVindo"
                component={Bem_Vindo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Rotainterna"
                component={Rotainterna}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
