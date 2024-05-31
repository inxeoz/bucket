import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Notice, Dues, Attend, Trans, Fees} from './tabs/index';

import {
  Ionicons,
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
     

      <Tab.Screen
        name="Notice"
        component={Notice}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <Entypo name="notification" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Dues"
        component={Dues}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <FontAwesome name="institution" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Attendence"
        component={Attend}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Trans}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <MaterialIcons name="featured-play-list" size={24} color="black" />
          ),
        }}
      />

       <Tab.Screen
        name="Fees"
        component={Fees}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
           <MaterialIcons name="payments" size={24} color="black" />
          ),
        }}
      />

      
    </Tab.Navigator>
  );
}

function LoggedInComponent() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}

export default LoggedInComponent;
