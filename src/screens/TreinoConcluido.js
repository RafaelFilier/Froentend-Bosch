import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TreinoConcluido() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
      <Text style={styles.title}>
        <Text style={styles.titleGreen}>TREINO</Text>{`\n`}CONCLUÍDO!
      </Text>

      <Image
        source={require('../../assets/Images/no_changeConfete.png')}
        style={styles.confetti}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/Images/trofeu.png')}
        style={styles.trophy}
        resizeMode="contain"
      />

      <Text style={styles.xpText}>+100 XP</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>🔥 Streak</Text>
          <Text style={styles.statValue}>5 <Text style={styles.statUnit}>dias</Text></Text>
          <Text style={styles.recordText}>Novo Recorde!</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>❤️ Streak</Text>
          <Text style={styles.hearts}>3 ❤️</Text>
        </View>
      </View>

      <View style={styles.achievementCard}>
        <Text style={styles.achievementLabel}>CONQUISTA DESBLOQUEADA</Text>
        <Image
          source={require('../../assets/Images/no_changeMedalha6.png')}
          style={styles.medal}
          resizeMode="contain"
        />
        <View style={styles.achievementText}>
          <Text style={styles.achievementName}>Ficou Fácil</Text>
          <Text style={styles.achievementDetails}>Complete seu 30°{`\n`}Treino</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.85}
      >
        <Text style={styles.continueText}>Continuar</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0B0F17',
    paddingHorizontal: 12,
    paddingTop: 18,
  },
  scrollView: {
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 24,
  },
  title: {
    color: '#fff',
    fontSize: 23,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 2,
  },
  titleGreen: {
    color: '#8EE524',
  },
  confetti: {
    position: 'absolute',
    top: 30,
    width: '100%',
    height: 330,
    zIndex: 1,
  },
  trophy: {
    width: 190,
    height: 190,
    marginTop: 8,
    zIndex: 2,
  },
  xpText: {
    color: '#FF2BE3',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 12,
  },
  statsRow: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
  },
  statCard: {
    flex: 1,
    minHeight: 90,
    backgroundColor: '#1B2330',
    borderRadius: 16,
    padding: 10,
  },
  statTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  statValue: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 5,
  },
  statUnit: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  recordText: {
    color: '#D7F20E',
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 7,
  },
  hearts: {
    fontSize: 23,
    marginTop: 7,
    color: '#fff',
    fontWeight: 'bold',
  },
  achievementCard: {
    width: '100%',
    minHeight: 98,
    backgroundColor: '#1B2330',
    borderRadius: 16,
    marginTop: 18,
    padding: 10,
    alignItems: 'center',
  },
  achievementLabel: {
    color: '#FF2BE3',
    fontSize: 13,
    fontWeight: 'bold',
  },
  medal: {
    position: 'absolute',
    left: 20,
    bottom: 8,
    width: 58,
    height: 58,
  },
  achievementText: {
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 38,
  },
  achievementName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  achievementDetails: {
    color: '#858B94',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
  },
  continueButton: {
    width: '100%',
    height: 42,
    backgroundColor: '#8EE524',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  continueText: {
    color: '#0B0F17',
    fontSize: 15,
    fontWeight: 'bold',
  },
});