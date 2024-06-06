
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import pagina2 from './pages/pagina2';
import pagina3 from './pages/pagina3';
import pagina4 from './pages/pagina4';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen
        name="treino"
        component={pagina2}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (<Ionicons size={25} color={"#000"} name="home" />)
            }
            return (<Ionicons size={20} color={"#000"} name="home-outline" /> )
          }
        }}
      />
      <Tab.Screen
        name="lazer"
        component={pagina3}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (<Ionicons size={25} color={"#000"} name="newspaper" />)
            }
            return (<Ionicons size={20} color={"#000"}  name="newspaper-outline" />)
          }
        }}
      />
      <Tab.Screen
        name="recomendacao"
        component={pagina4}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (<Ionicons size={25} color={"#000"} name="cart" />)
            }
            return (<Ionicons size={20} color={"#000"} name="cart-outline" />)
          }
        }}
      />
    </Tab.Navigator>
  )
}



