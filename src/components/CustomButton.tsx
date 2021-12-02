import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

interface Props {
  title: string,
  onPress: () => void,
  style?: StyleProp<ViewStyle>,
}

export const CustomButton = ({title, onPress, style = {}}:Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}
      onPress={onPress}
      style={{...styles.buttonContainer, ...style as any}}
    >
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon
          name='locate-outline'
          color='#483d8b'
          size={20}
        />
        <Text style={{color: '#483d8b'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 140,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ced1'
  }
})
