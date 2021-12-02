import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../screens/LoadingScreen';

export const StackNavigator = () => {

  const {permissions} = useContext(PermissionsContext);

  if(permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />
  }
  
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      //initialRouteName="PermissionsScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        }
      }}
    >
      {
        (permissions.locationStatus === 'granted') 
        ? <Stack.Screen name="HomeScreen"        component={HomeScreen} />
        : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      } 
    </Stack.Navigator>
  )
}
