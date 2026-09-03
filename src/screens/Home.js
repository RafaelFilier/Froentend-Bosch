import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.text_user}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Olá, Usuario</Text>
          <Text style={{ color: '#7a7a7a', fontSize: 14, fontWeight: 'normal' }}>Pronto para evoluir hoje!</Text>
        </View>
        <View style={styles.whiteBall}>
          <Image
            source={require('../../assets/Images/user.jpeg')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.xpContainer}>
          <Text style={styles.xpText}>15.067 / 20.000 XP</Text>

          <ProgressBar
            progress={0.75}
            color="#8B45FF"
            style={styles.xpBar}
          />
        </View>
        <View style={styles.squares_row}>
          <View style={styles.streak_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>🔥 Streak</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>10 dias</Text>
          </View>
          <View style={styles.life_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>❤️ Streak</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>3 ❤️</Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Text style={{ color: '#FF2BE3', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>🏆 Desafio do Dia</Text>
          <Text style={{ color: '#9CA3AF', fontSize: 12, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>Treine 4 vezes nessa semana</Text>
          <View style={styles.xpContainer2}>
            <Text style={styles.xpText2}>3/4 concluidos</Text>
            <ProgressBar
              progress={0.75}
              color="#8B45FF"
              style={styles.xpBar2}
            />
          </View>
        </View>
        <View style={styles.resumo_square}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Resumo da semana</Text>
          <View style={styles.summary_row}>
            <Text style={styles.summary_text}>❤️ 3 Treinos</Text>
            <Text style={styles.summary_text}>🌟 120 pontos</Text>
            <Text style={styles.summary_text}>🏆 10 treinos concluídos</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnGreen}
        >
          <Text style={styles.btnText}>🏋️ Iniciar Treino</Text>
        </TouchableOpacity>
      </ScrollView>

        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
            <Text style={[styles.tabIcon, styles.activeTab]}>⌂</Text>
            <Text style={[styles.tabText, styles.activeTab]}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Treino')}>
            <Text style={styles.tabIcon}>🏋</Text>
            <Text style={styles.tabText}>Treinos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cadastrar')}>
            <Text style={styles.tabIcon}>🥇</Text>
            <Text style={styles.tabText}>Ranking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabIcon}>🏆</Text>
            <Text style={styles.tabText}>Ranking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.tabIcon}>♙</Text>
            <Text style={styles.tabText}>Perfil</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F17',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 106,

  },

  text_user: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginTop: '14%',
  },
  whiteBall: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: '#0c0c0c',
    borderWidth: 2,
    borderColor: '#8BEA18',
    marginLeft: 20,
    marginTop: '2%',
  },
  profileImage: {
    width: 70,
    height: 72,
    borderRadius: 37.5,
  },

  xpContainer: {
    width: '70%',
    marginTop: 0,
    alignSelf: 'flex-end',
    marginRight: 20,
  },

  xpBar: {
    height: 8,
    borderRadius: 10,
    backgroundColor: '#9CA3AF',
    alignSelf: 'flex-end',
  },

  xpText: {
    color: '#faf3f3',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
  },

  streak_square: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#141A24',
  }, 
  life_square: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#141A24',
  },
  squares_row: {
    flexDirection: 'row',
    gap: '5%',
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: '4%',
  },
  desafio_square: {
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#141A24',
  },
  resumo_square: {
    width: '90%',
    height: 110,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#141A24',
  },
  summary_row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 12,
  },
  summary_text: {
    color: '#9CA3AF',
    fontSize: 14,
    fontWeight: 'normal',
  },

  btnGreen: {
    backgroundColor: '#8EE524',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },


  btnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#141A24',
    borderTopWidth: 1,
    borderTopColor: '#27313D',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    color: '#7A8491',
    fontSize: 19,
  },
  tabText: {
    color: '#7A8491',
    fontSize: 10,
    marginTop: 4,
  },
  activeTab: {
    color: '#8EE524',
  },

  xpContainer2: {
    width: '90%',
    marginTop: 0,
    alignSelf: 'flex-end',
    marginRight: 20,
  },

  xpBar2: {
    height: 8,
    borderRadius: 10,
    backgroundColor: '#9CA3AF',
    alignSelf: 'flex-end',
  },

  xpText2: {
    color: '#9CA3AF',
    fontSize: 10,
    textAlign: 'left',
    marginBottom: 5,
  },
});

