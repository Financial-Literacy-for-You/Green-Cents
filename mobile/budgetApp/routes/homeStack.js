import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'

const Stack = createStackNavigator(stack());

function stack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}