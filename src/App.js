import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import firebase from 'firebase/app';
import firebaseConfig from '../firebaseConfig';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged(user => {
      setLoggedIn(user ? true : false);
    });
  }, []);

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return (
          <View style={{height: 60}}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  return (
    <View>
      <Header headerText="Header" />
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
