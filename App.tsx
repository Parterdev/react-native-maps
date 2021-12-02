import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PermissionsProvider } from './src/context/PermissionsContext'
import { StackNavigator } from './src/navigator/StackNavigator'

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState= ({children}:AppStateProps) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator/>
      </AppState>
    </NavigationContainer>
  )
}

export default App
