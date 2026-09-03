import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export default function Loading() {
  const navigation = useNavigation();

  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setProgresso((valor) => {
        return Math.min(valor + 0.01, 1);
      });
    }, 30);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    if (progresso >= 1) {
      navigation.replace('Login');
    }
  }, [progresso, navigation]);

  return (
    <View style={styles.container}>

        <Image 
            source={require('../../assets/Images/no_changeLogo.png')}
            style={{ width: 200, height: 200, marginBottom: 20 }}
            resizeMode="contain"
        />
        
    

        

        
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