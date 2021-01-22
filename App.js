
import 'react-native-gesture-handler';
import React from 'react';
import  Home  from "./Home";
import  Round1  from "./Round1";
import  Round2  from "./Round2";
import  Round3  from "./Round3";
import  Round4  from "./Round4";
import  Score  from "./Score";
import Team from './Team'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="Round1" component={Round1}/>
        <Stack.Screen name="Round2" component={Round2}/>
        <Stack.Screen name="Round3" component={Round3}/>
        <Stack.Screen name="Round4" component={Round4}/>
        <Stack.Screen name="Score" component={Score}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



