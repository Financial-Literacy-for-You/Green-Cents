import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, StatusBar, SafeAreaView, } from 'react-native'
import CustomButton from './components/Button'
// import Navigator from './routes/homeStack'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home'
import Goals from './screens/goals'
import FlyDesc from './screens/flyDesc'
import Budgeting from './screens/budgeting';
// render elemtn conditionally: https://stackoverflow.com/questions/44046037/if-else-statement-inside-jsx-reactjs

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Goals" component={Goals} options={{ headerShown: false }} />
        <Stack.Screen name="FlyDesc" component={FlyDesc} options={{ headerShown: false }} />
        <Stack.Screen name="Budgeting" component={Budgeting} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;