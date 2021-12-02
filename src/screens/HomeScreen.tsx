import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#e9967a' animated={true}/>
      <Text style={{fontSize: 20, color: 'black'}}>
        Hey you!
      </Text>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Icon
          name='star-outline'
          color='red'
          size={50} 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9967a'
  }
})
