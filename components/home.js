import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Gêneros de anime</Text>
      <Image source={require('../assets/shoujo.png')} />
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Shoujo')}}>
        <Text>Shoujo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Shounen')}}>
        <Text>Shounen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{props.navigation.navigate('Seinen')}}>
        <Text>Seinen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
