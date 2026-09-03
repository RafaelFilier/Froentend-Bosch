import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";
import { useEffect } from 'react';

export default function Home() {
  const navigation = useNavigation();

 

  return (
    <View style={styles.container}>
        <Text style={styles.saudacao}>Bem-vindo(a) Murilo!</Text>
        <Text style={styles.texto}>Pronto para suar hoje?</Text>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0F17',

  },
});