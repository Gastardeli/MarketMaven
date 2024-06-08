
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons/';
import tela1 from './tela1';
import tela2 from './tela2';
import tela3 from './tela3';

const Tab = createBottomTabNavigator();

export default function Rotainterna() { // Corrigido para exportar o componente
  return (
    <Tab.Navigator>
      
      <Tab.Screen
        name="Home"
        component={tela1}
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
        name="Receps"
        component={tela2}
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
        name="Carrinho"
        component={tela3}
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
    