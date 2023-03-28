import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Soundgarden() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Soundgarden</Text>
      <Image style={styles.image} source={require('../assets/soundgarden.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 350,
    margin: 12
  },
  container: {
    flex: 1,
    backgroundColor: '#3C280D',
    padding: 8,
  },
  paragraph: {
    padding: 10,
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2A180A',
  },
    title: {
    margin: 24,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});