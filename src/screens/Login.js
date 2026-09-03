import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const navigation = useNavigation();

 

  return (
    <LinearGradient
      colors={['#74846D', '#4D873C', '#18771F']}
      locations={[0, 0.45, 1]}
      style={styles.container}
    >
      <Image 
            source={require('../../assets/Images/no_changeLogo.png')}
            style={styles.logo_image}
        resizeMode="contain"
        />

      <View style={styles.button_container}>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Entrar')}
            style={styles.button_entrar}
        >
            
            <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Entrar</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastrar')}
            style={styles.button_criar_conta}
        >
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

        <Text style={styles.text_ou_continue}>ou continue com</Text>

      <View style={styles.button2_container}>

        <Image
            source={require('../../assets/Images/google-logo.png')}
            style={styles.image_google}
            resizeMode="contain"
        />

        <Image
            source={require('../../assets/Images/apple-logo.png')}
            style={styles.image_apple}
            resizeMode="contain"
        />

        <Image
            source={require('../../assets/Images/facebook-logo.png')}
            style={styles.image_facebook}
            resizeMode="contain"
        />  
      </View>      

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',

  },
  logo_image: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginLeft: -100,
    marginTop: -100
  },
    image: {
    width: 500,
    height: 900,
    marginTop: -200,
  },
    button_entrar: {
    backgroundColor: '#00CF75',
    padding: 10,
    width: 250,
    alignItems: 'center',
    borderRadius: 5
  },
    button_criar_conta: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#00CF75'
  },
    text_ou_continue: {
    color: '#aaaaaa',
    fontSize: 16,
    marginTop: 20
  },
    image_google: {
    width: 30,
    height: 30,
    
  },
    image_apple: {
    width: 30,
    height: 30,
    
  },
    image_facebook: {
    width: 30,
    height: 30
  },

    button_container: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 400,
  },
    button2_container: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
    alignItems: 'center'
  }
});