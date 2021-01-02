import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase/app';
import firebaseConfig from '../firebaseConfig';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

const App = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <View>
      <Header headerText="Header" />
      <Text>App</Text>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
