
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import CarDetailsScreen from './screens/CarDetailsScreen';


export default function App() {

   const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer children={
      <Stack.Navigator>
      <Stack.Screen
         options={{
            animation: 'slide_from_left',
            animationTypeForReplace: 'push',
            headerShown: false
         }}
         name='Home'
         component={HomeScreen}
         />
        <Stack.Screen
         options={{
          presentation: 'modal',
          headerShown: false,
          animation: "slide_from_bottom",
          animationTypeForReplace: "push"
         }}
         name='CarDetails'
         component={CarDetailsScreen}
         />
    </Stack.Navigator>
    

    }/>

  );
}

