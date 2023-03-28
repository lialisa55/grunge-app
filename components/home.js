import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grunge</Text>
      <ScrollView>
      <Image style={styles.image} source={require('../assets/hole.png')} />
      <Text style={styles.paragraph}>Grunge (às vezes chamado de Seattle sound ou som de Seattle) é um subgênero do rock alternativo que surgiu no final da década de 1980 no estado americano de Washington, principalmente em Seattle, inspirado pelo hardcore punk, pelo heavy metal e pelo indie rock. As letras das bandas nomeadas grunge geralmente caracterizam-se por altas doses de angústia e sarcasmo, entrando em temas como alienação social, auto-dúvida, abuso, negligência, traição, isolamento social/isolamento emocional, trauma psicológico e desejo de liberdade.A estética grunge é despojada em comparação a outras formas de rock e muitos músicos grunge destacaram-se pela sua aparência desleixada e por rejeitarem a teatralidade em suas performances.

O início do movimento grunge agrupou-se em torno da gravadora independente Sub Pop, de Seattle, no final da década de 1980. O grunge tornou-se comercialmente bem-sucedido na primeira metade da década de 1990, devido principalmente aos lançamentos de Facelift, do grupo Alice in Chains, de Nevermind, do grupo Nirvana e Ten, do grupo Pearl Jam. O sucesso dessas bandas impulsionou a popularidade do rock alternativo e fez do grunge a forma mais popular de hard rock na época. No entanto, muitas bandas grunge estavam desconfortáveis com tal popularidade. Apesar de a maioria das bandas grunge ter-se separado ou desaparecido no final da década de 1990, sua influência continua a afetar o rock moderno.</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Nirvana');
        }}>
        <Text style={styles.items}>Nirvana</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Soundgarden');
        }}>
        <Text style={styles.items}>Soundgarden</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Alice in Chains');
        }}>
        <Text style={styles.items}>Alice in Chains</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width:350,
    margin: 12
  },
  container: {
    flex: 1,
    backgroundColor: '#3C280D',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  items: {
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
