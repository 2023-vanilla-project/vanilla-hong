import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})
