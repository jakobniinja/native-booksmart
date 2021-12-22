import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Hem" component={Home} />
    </Stack.Navigator>
      </NavigationContainer>
  );
}