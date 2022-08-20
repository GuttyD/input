import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [hide, setHide] = useState(true)

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder={'Enter name'}
      autoCapitalize='none'
      autoCorrect={false}
      value={name}
      onChangeText={newName => setName(newName)}
      />

      <TextInput
        style={styles.input}
        placeholder={'Enter password'}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={hide}
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        />
        { password.length < 5 ? <Text style={{color: 'red'}}> A senha deve ter pelo menos 5 dígitos. </Text> : null }

        <TouchableOpacity style={styles.button} onPress={() => setHide(!hide) }>
          { hide === true ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" /> }
        </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 60,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
