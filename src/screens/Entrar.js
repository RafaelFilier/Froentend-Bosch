import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

const Entrar = ({ navigation }) => {

  return (
    <View style={styles.container}>
    
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>{'<'}</Text>
      </TouchableOpacity>

    <Image 
    source={require('../../assets/Images/no_changeLogo.png')}
    style={styles.logo_image}
    />

    <View style={styles.button_container}>
        <Text style={styles.title}>Entrar</Text>


        <TextInput
            style={styles.input}
            placeholder="Digite seu E-mail"
            placeholderTextColor="#aab1bd"
        />

        <TextInput
            style={styles.input}
            placeholder="Digite sua Senha"
            placeholderTextColor="#aab1bd"
        />

        <TouchableOpacity
            style={styles.btnGreen}
            onPress={() => navigation.navigate('Home')}
        >
            <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Entrar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F17',
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: 'flex-start',
  },

   button_container: {
    flexDirection: 'column',
    gap: 5,
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    right: '10%',
},

  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo_image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
  },

  backIcon: {
    fontSize: 36,
    color: '#fff',
    lineHeight: 34,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#d8dce9',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 12,
  },

  btnGreen: {
    backgroundColor: '#8EE524',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  btnText: {
    color: '#000',
    fontWeight: 'bold',
  },

});
  