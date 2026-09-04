import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";

export default function Conquistas() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.text_user}>
          <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>Conquistas</Text>
        </View>
        <View style={styles.squares_row}>
          <View style={styles.streak_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Conquistas</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>5</Text>
          </View>
          <View style={styles.life_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Em progresso</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>7</Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/no_changeConquista2.png')}
            style={styles.xpBadge}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Primeiro Passo</Text>
            <Text style={styles.challengeDescription}>Complete seu primeiro treino</Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/no_changeConquistas.png')}
            style={styles.xpBadge}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Ficou Fácil</Text>
            <Text style={styles.challengeDescription}>Complete seu 30° Treino</Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/no_changeCOnquistas3.png')}
            style={styles.xpBadge}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Guerreiro</Text>
            <Text style={styles.challengeDescription}>Complete 20 treinos</Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/no_changeConquistas4.png')}
            style={styles.xpBadge}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Determinado</Text>
            <Text style={styles.challengeDescription}>Complete 10 desafios</Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/no_changeCOnquistas3.png')}
            style={styles.xpBadge}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Lenda</Text>
            <Text style={styles.challengeDescription}>Alcance 100.000 de experiência</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.replace('Home')}>
                  <Text style={styles.tabIcon}>⌂</Text>
                  <Text style={styles.tabText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Treino')}>
                  <Text style={styles.tabIcon}>🏋</Text>
                  <Text style={styles.tabText}>Treinos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.replace('Batalha')}>
                  <Text style={styles.tabIcon}>⚔️</Text>
                  <Text style={styles.tabText}>Batalha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                  <Text style={[styles.tabIcon, styles.activeTab]}>🥇</Text>
                  <Text style={[styles.tabText, styles.activeTab]}>Conquistas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.replace('Ranking')}>
                  <Text style={styles.tabIcon}>🏆</Text>
                  <Text style={styles.tabText}>Ranking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => navigation.replace('Perfil')}>
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

  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginLeft: '5%',
  },

  backIcon: {
    fontSize: 36,
    color: '#fff',
    lineHeight: 34,
  },

  text_user: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20%',
    marginLeft: '10%',
  },

  whiteBall: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#0c0c0c',
    borderWidth: 2,
    borderColor: '#7700FE',
    marginTop: '2%',
    alignSelf: 'center',
  },
  profileImage: {
    width: 145,
    height: 146,
    borderRadius: 75,
  },

  xpContainer: {
    width: '70%',
    marginTop: 0,
    alignSelf: 'center',


  },

  xpBar: {
    height: 8,
    borderRadius: 10,
    backgroundColor: '#9CA3AF',
    alignSelf: 'center',
    width: '90%',
  },

  xpText: {
    color: '#faf3f3',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
  },

  streak_square: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#141A24',
    borderWidth: 2,
    borderColor: '#000',
  }, 

  life_square: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#141A24',
    borderWidth: 2,
    borderColor: '#000',
  },

  squares_row: {
    flexDirection: 'row',
    gap: '2%',
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '15%',
  },

  desafio_square: {
    width: '90%',
    minHeight: 120,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#141A24',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
  xpBadge: {
    width: 76,
    height: 76,
  },

  xpBadge2: {
    width: 40,
    height: 40,
  },
  swordsIcon: {
    fontSize: 42,
    width: 76,
    textAlign: 'center',
  },

  challengeContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 8,
    gap: 6,
    
  },
  challengeTitle: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  challengeDescription: {
    color: '#9CA3AF',
    fontSize: 16,
  },
  resumo_square: {
    width: '90%',
    height: 110,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#141A24',
    borderWidth: 2,
    borderColor: '#000',
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
    backgroundColor: '#7700FE',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#000',
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
});

