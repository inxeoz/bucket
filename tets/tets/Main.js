import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, MaterialIcons , FontAwesome6} from '@expo/vector-icons';
import ArticlesHome from './components/ArticleHome';


const Tab = createBottomTabNavigator();


function Main({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
        name="Posts"
          component={() => <ArticlesHome url={'https://www.nrigroupindia.com/category/latest-posts/'} />}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
         <FontAwesome6 name="fire" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Blogs"
       component={() => <ArticlesHome url={'https://www.nrigroupindia.com/category/blog/'}/>}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
           <MaterialIcons name="article" size={24} color="black" />
          ),
        }}
      />
      
     
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main;























