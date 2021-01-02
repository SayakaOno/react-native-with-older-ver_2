import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const onButtonPress = () => {
    setLoading(true);
    setError('');

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginFail);
      });
  };

  const onLoginSuccess = () => {
    setEmail('');
    setPassword('');
    setLoading(false);
    setError('');
  };

  const onLoginFail = () => {
    setError('Authentication Failed');
    setLoading(false);
  };

  const renderButton = () => {
    if (loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={onButtonPress}>Log in</Button>;
  };

  return (
    <Card>
      <CardSection>
        <Input
          placeholder="user@gmail.com"
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>{error}</Text>

      <CardSection>{renderButton()}</CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default LoginForm;
