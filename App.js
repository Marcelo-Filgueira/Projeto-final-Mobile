import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./src/screens/Login/index";
import Home from "./src/screens/Home/index";

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>      
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
