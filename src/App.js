import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from './components/common';

const App = () => {
  return (
    <View>
      <Header headerText="Header" />
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
