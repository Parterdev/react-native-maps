import React from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white' animated={true}/>
      <ActivityIndicator 
        color='#483d8b'
        size={100}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
