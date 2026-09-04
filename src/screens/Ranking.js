import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const rankingMock = {
  global: [
    { id: '1', name: 'Você', xp: 2200, position: 1 },
    { id: '2', name: 'Murilo', xp: 1500, position: 2 },
    { id: '3', name: 'Ana', xp: 1800, position: 3 },
    { id: '4', name: 'Guilherme', xp: 1300, position: 4 },
    { id: '5', name: 'Carla', xp: 1100, position: 5 },
    { id: '6', name: 'Lucas', xp: 800, position: 6 },
  ],
  amigos: [
    { id: '1', name: 'Você', xp: 2200, position: 1 },
    { id: '2', name: 'Murilo', xp: 1500, position: 2 },
    { id: '3', name: 'Guilherme', xp: 1300, position: 3 },
  ],
};

async function fetchRanking(scope) {
  // Substitua o retorno pelo fetch da sua API ou banco de dados.
  return rankingMock[scope];
}

export default function Ranking() {
  const navigation = useNavigation();
  const [scope, setScope] = useState('global');
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetchRanking(scope).then((players) => {
      if (isMounted) {
        setRanking(players);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [scope]);

  const podiumPlayers = [ranking[2], ranking[0], ranking[1]].filter(Boolean);
  const listPlayers = ranking.filter((player) => player.position > 3);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >


        <Text style={styles.title}>Rankings</Text>

        <View style={styles.scopeSelector}>
          <TouchableOpacity
            style={[styles.scopeButton, scope === 'global' && styles.scopeButtonActive]}
            onPress={() => setScope('global')}
          >
            <Text style={[styles.scopeText, scope === 'global' && styles.scopeTextActive]}>Global</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.scopeButton, scope === 'amigos' && styles.scopeButtonActive]}
            onPress={() => setScope('amigos')}
          >
            <Text style={[styles.scopeText, scope === 'amigos' && styles.scopeTextActive]}>Amigos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.podium}>
          {podiumPlayers.map((player) => (
            <View style={[styles.podiumPlayer, player.position === 1 && styles.firstPlace]} key={player.id}>
              <Text style={styles.positionBadge}>{player.position}</Text>
              <View style={[styles.avatarFrame, player.position === 1 && styles.firstAvatarFrame]}>
                <Image source={require('../../assets/Images/user.jpeg')} style={styles.avatar} />
              </View>
              <Text style={styles.podiumName}>{player.name}</Text>
              <Text style={[styles.podiumXp, player.position === 1 && styles.firstXp]}>{player.xp}xp</Text>
            </View>
          ))}
        </View>

        <View style={styles.playerList}>
          {listPlayers.map((player) => (
            <View style={styles.playerRow} key={player.id}>
              <Text style={styles.rowPosition}>{player.position}º</Text>
              <View style={styles.rowAvatarFrame}>
                <Image source={require('../../assets/Images/user.jpeg')} style={styles.rowAvatar} />
              </View>
              <Text style={styles.rowName}>{player.name}</Text>
              <Text style={styles.rowXp}>{player.xp}xp</Text>
            </View>
          ))}
          {listPlayers.length === 0 && (
            <Text style={styles.emptyText}>Nenhum outro jogador neste ranking.</Text>
          )}
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
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.replace('Conquistas')}>
            <Text style={styles.tabIcon}>🥇</Text>
            <Text style={styles.tabText}>Conquistas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Text style={[styles.tabIcon, styles.activeTab]}>🏆</Text>
            <Text style={[styles.tabText, styles.activeTab]}>Ranking</Text>
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
    paddingHorizontal: 12,
    paddingBottom: 90,
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '7%',
  },
  backIcon: {
    color: '#fff',
    fontSize: 34,
    lineHeight: 34,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: '15%',
    marginBottom: '6%',
  },
  scopeSelector: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: '#211A36',
    borderRadius: 15,
    marginTop: 8,
    overflow: 'hidden',
  },
  scopeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scopeButtonActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#8EE524',
  },
  scopeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  scopeTextActive: {
    color: '#8EE524',
  },
  podium: {
    height: 170,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingHorizontal: 4,
    marginTop: 12,
  },
  podiumPlayer: {
    width: '30%',
    alignItems: 'center',
  },
  firstPlace: {
    marginBottom: 15,
  },
  positionBadge: {
    color: '#E6B74A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  avatarFrame: {
    width: 64,
    height: 64,
    padding: 3,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#A5B5C2',
  },
  firstAvatarFrame: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderColor: '#FFE600',
    borderWidth: 3,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  podiumName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  podiumXp: {
    color: '#9CA3AF',
    fontSize: 11,
    marginTop: 3,
  },
  firstXp: {
    color: '#FFE600',
    fontWeight: 'bold',
  },
  playerList: {
    borderWidth: 2,
    borderColor: '#17202C',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 10,
  },
  playerRow: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17202C',
    borderBottomWidth: 1,
    borderBottomColor: '#394452',
    paddingHorizontal: 6,
  },
  rowPosition: {
    color: '#fff',
    width: 25,
    fontSize: 16,
  },
  rowAvatarFrame: {
    width: 43,
    height: 43,
    padding: 2,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: '#8EE524',
  },
  rowAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
  },
  rowName: {
    color: '#fff',
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  rowXp: {
    color: '#fff',
    fontSize: 12,
  },
  emptyText: {
    color: '#9CA3AF',
    textAlign: 'center',
    padding: 20,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 6,
    backgroundColor: '#141A24',
    borderTopWidth: 1,
    borderTopColor: '#27313D',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    color: '#7A8491',
    fontSize: 18,
  },
  tabText: {
    color: '#7A8491',
    fontSize: 9,
    marginTop: 3,
  },
  activeTab: {
    color: '#8EE524',
  },
});
