import React, { useContext } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../components/CustomButton';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreen = () => {

  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#483d8b' animated={true}/>

      <Text style={{fontSize: 30, color: 'white'}}>Permissions Screen</Text>
      <Text style={{marginVertical: 10, color: 'white'}}>Status: {JSON.stringify(permissions, null, 5)}</Text>

      <CustomButton
        title={ (permissions.locationStatus === 'blocked') 
          ? 'GO TO SETTINGS' 
          : 'GPS Permission' 
        }
        onPress={askLocationPermission}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#483d8b'
  }
})
