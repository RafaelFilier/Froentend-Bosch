import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";

export default function Treino() {
  const navigation = useNavigation();
  const [selectedSquare, setSelectedSquare] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.text_user}>
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Registro de treino</Text>
        </View>
        <View style={styles.squares_container}>
          <View style={styles.squares_row}>
            <TouchableOpacity
              style={[styles.streak_square, selectedSquare === 'streak' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('streak')}
              activeOpacity={0.8}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>🔥 Streak</Text>
              <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>10 dias</Text>
              {selectedSquare === 'streak' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.life_square, selectedSquare === 'life' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('life')}
              activeOpacity={0.8}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>❤️ Streak</Text>
              <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>3 ❤️</Text>
              {selectedSquare === 'life' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.points_square, selectedSquare === 'points' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('points')}
              activeOpacity={0.8}
            >
              <Text style={styles.squareTitle}>🌟 Pontos</Text>
              <Text style={styles.squareValue}>120</Text>
              {selectedSquare === 'points' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.workout_square, selectedSquare === 'workout' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('workout')}
              activeOpacity={0.8}
            >
              <Text style={styles.squareTitle}>🏋️ Treinos</Text>
              <Text style={styles.squareValue}>10</Text>
              {selectedSquare === 'workout' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
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
      </ScrollView>

      <View style={styles.tabBar}>
          <Text style={styles.rewardText}>XP a receber{`\n`}+1000</Text>
          <TouchableOpacity
            style={styles.bottomButton}
            activeOpacity={0.85}
          >
            <Text style={styles.bottomButtonText}>concluir Treino</Text>
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
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: '14%',
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
    width: '47.5%',
    height: 105,
    borderRadius: 10,
    backgroundColor: '#141A24',
    borderWidth: 2,
    borderColor: '#000',
  }, 
  life_square: {
    width: '47.5%',
    height: 105,
    borderRadius: 10,
    backgroundColor: '#141A24',
    borderWidth: 2,
    borderColor: '#000',
  },
  points_square: {
    width: '47.5%',
    height: 105,
    borderRadius: 10,
    backgroundColor: '#141A24',
    borderWidth: 2,
    borderColor: '#000',
  },
  workout_square: {
    width: '47.5%',
    height: 105,
    borderRadius: 10,
    backgroundColor: '#141A24',
    borderWidth: 2,
    borderColor: '#000',
  },
  squares_container: {
    width: '94%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 14,
    backgroundColor: '#10151F',
    borderWidth: 2,
    borderColor: '#000',
  },
  squares_row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    rowGap: 10,
    alignSelf: 'center',
    marginTop: '4%',
  },
  squareTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  squareValue: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'normal',
    marginLeft: 15,
    marginTop: 10,
  },
  selectedSquare: {
    backgroundColor: '#315611',
    borderColor: '#8EE524',
  },
  checkMark: {
    position: 'absolute',
    top: 8,
    right: 10,
    color: '#8EE524',
    fontSize: 22,
    fontWeight: 'bold',
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
    marginHorizontal: '5%',
  },


  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rewardText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  bottomButton: {
    backgroundColor: '#8EE524',
    borderRadius: 14,
    height: 50,
    width: '58%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8EE524',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  bottomButtonText: {
    color: '#0B0F17',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 96,
    backgroundColor: '#141A24',
    borderTopWidth: 1,
    borderTopColor: '#27313D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
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

