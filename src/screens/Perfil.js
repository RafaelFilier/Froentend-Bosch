import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";

export default function Perfil() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.text_user}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Perfil</Text>
        </View>
        <View style={styles.whiteBall}>
          <Image
            source={require('../../assets/Images/user.jpeg')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.xpContainer}>
            <Text style={styles.xpText}>15.067/20.000</Text>
            <ProgressBar
                progress={0.75}
                color="#8B45FF"
                style={styles.xpBar}
            />
        </View>
        <View style={styles.squares_row}>
          <View style={styles.streak_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Treinos</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>50</Text>
          </View>
          <View style={styles.life_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Conquistas</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>10</Text>
          </View>
          <View style={styles.life_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Streak</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>7 Dias</Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/no_changeLevel.png')}
            style={styles.xpBadge}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>XP Total</Text>
            <Text style={styles.challengeDescription}>15.067 </Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Text style={styles.swordsIcon}>⚔️</Text>
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Batalhas Vencidas</Text>
            <Text style={styles.challengeDescription}>10 </Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/check.png')}
            style={styles.xpBadge2}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Desafios Concluidos</Text>
            <Text style={styles.challengeDescription}>17 </Text>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Image
            source={require('../../assets/Images/no_changeRelógio.png')}
            style={styles.xpBadge2}
            resizeMode="contain"
          />
          <View style={styles.challengeContent}>
            <Text style={styles.challengeTitle}>Tempo de Treino</Text>
            <Text style={styles.challengeDescription}>1d 2h 30m </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnGreen}
        >
          <Text style={styles.btnText}>Configurações</Text>
        </TouchableOpacity>
      </ScrollView>

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
    alignItems: 'center',
    marginTop: '10%',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    gap: 12,
    
  },
  challengeTitle: {
    color: '#fff',
    fontSize: 16,
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

