import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Modal, TextInput, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";

export default function Treino() {
  const navigation = useNavigation();
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [exercises, setExercises] = useState([
    { name: 'Supino Reto', details: '4 Séries X 15 Repetições' },
    { name: 'Agachamento Livre', details: '4 Séries X 10 Repetições' },
    { name: 'Remada Unilateral', details: '2 Séries X 13 Repetições' },
  ]);
  const [isAddExerciseVisible, setIsAddExerciseVisible] = useState(false);
  const [editingExerciseIndex, setEditingExerciseIndex] = useState(null);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDetails, setExerciseDetails] = useState('');

  function addExercise() {
    const name = exerciseName.trim();
    const details = exerciseDetails.trim();

    if (!name || !details) {
      return;
    }

    if (editingExerciseIndex !== null) {
      setExercises((currentExercises) => currentExercises.map((exercise, index) => (
        index === editingExerciseIndex ? { name, details } : exercise
      )));
    } else {
      setExercises((currentExercises) => [
        ...currentExercises,
        { name, details },
      ]);
    }

    closeExerciseModal();
  }

  function openEditExercise(index) {
    const exercise = exercises[index];
    setEditingExerciseIndex(index);
    setExerciseName(exercise.name);
    setExerciseDetails(exercise.details);
    setIsAddExerciseVisible(true);
  }

  function deleteExercise(index) {
    Alert.alert(
      'Excluir exercício',
      `Deseja excluir ${exercises[index].name}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => setExercises((currentExercises) => (
            currentExercises.filter((_, exerciseIndex) => exerciseIndex !== index)
          )),
        },
      ]
    );
  }

  function closeExerciseModal() {
    setExerciseName('');
    setExerciseDetails('');
    setEditingExerciseIndex(null);
    setIsAddExerciseVisible(false);
  }
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (!isTimerRunning) {
      return undefined;
    }

    const timer = setInterval(() => {
      setElapsedSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(elapsedSeconds % 60).padStart(2, '0');

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
          <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', margin: '5%' }}>Registro de treino</Text>
        </View>
        <View style={styles.squares_container}>
          <View style={styles.squares_row}>
            <TouchableOpacity
              style={[styles.life_square, selectedSquare === 'streak' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('streak')}
              activeOpacity={0.8}
            >
              <Text style={styles.lifeTitle}>🏋️ Musculaçao</Text>
              {selectedSquare === 'streak' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.life_square, selectedSquare === 'life' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('life')}
              activeOpacity={0.8}
            >
              <Text style={styles.lifeTitle}>❤️ Cardio</Text>
              {selectedSquare === 'life' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.life_square, selectedSquare === 'points' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('points')}
              activeOpacity={0.8}
            >
              <Text style={styles.lifeTitle}>🛠️ Funcional</Text>
              {selectedSquare === 'points' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.life_square, selectedSquare === 'workout' && styles.selectedSquare]}
              onPress={() => setSelectedSquare('workout')}
              activeOpacity={0.8}
            >
              <Text style={styles.lifeTitle}>••• Outros</Text>
              {selectedSquare === 'workout' && <Text style={styles.checkMark}>✓</Text>}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.desafio_square}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 10, alignSelf: 'center' }}>Duração de Treino</Text>
          <Text style={styles.timerText}>{hours}:{minutes}:{seconds}</Text>
          <TouchableOpacity
            style={styles.timerButton}
            onPress={() => setIsTimerRunning((running) => !running)}
            activeOpacity={0.8}
          >
            <Text style={styles.timerButtonText}>{isTimerRunning ? 'Pausar' : 'Iniciar'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resumo_square}>
          <Text style={styles.exercisesTitle}>Exercícios</Text>
          {exercises.map((exercise, index) => (
            <TouchableOpacity
              key={`${exercise.name}-${index}`}
              style={styles.exerciseItem}
              activeOpacity={0.8}
            >
              <View style={styles.exerciseIcon}>
                <Text style={styles.exerciseIconText}>🏋️</Text>
              </View>
              <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDetails}>{exercise.details}</Text>
              </View>
              <View style={styles.exerciseActions}>
                <TouchableOpacity onPress={() => openEditExercise(index)}>
                  <Text style={styles.editAction}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteExercise(index)}>
                  <Text style={styles.deleteAction}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.addExerciseButton}
            onPress={() => {
              setEditingExerciseIndex(null);
              setExerciseName('');
              setExerciseDetails('');
              setIsAddExerciseVisible(true);
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.addExerciseIcon}>+</Text>
            <Text style={styles.addExerciseText}>Adicionar exercício</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={isAddExerciseVisible}
        transparent
        animationType="fade"
        onRequestClose={closeExerciseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editingExerciseIndex === null ? 'Novo exercício' : 'Editar exercício'}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do exercício"
              placeholderTextColor="#7A8491"
              value={exerciseName}
              onChangeText={setExerciseName}
            />
            <TextInput
              style={styles.input}
              placeholder="Ex.: 4 Séries X 12 Repetições"
              placeholderTextColor="#7A8491"
              value={exerciseDetails}
              onChangeText={setExerciseDetails}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={closeExerciseModal}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={addExercise}>
                <Text style={styles.saveButtonText}>
                  {editingExerciseIndex === null ? 'Adicionar' : 'Salvar'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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

  backButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '5%',
  },

  backIcon: {
    fontSize: 36,
    color: '#fff',
    lineHeight: 34,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  lifeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lifeValue: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'normal',
    marginTop: 8,
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
  timerText: {
    color: '#8EE524',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 1,
  },
  timerButton: {
    backgroundColor: '#8EE524',
    borderRadius: 8,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 1,
  },
  timerButtonText: {
    color: '#0B0F17',
    fontWeight: 'bold',
    fontSize: 12,
  },
  resumo_square: {
    width: '90%',
    minHeight: 270,
    alignSelf: 'center',
    marginTop: 5,
    padding: 10,
    borderRadius: 14,
    backgroundColor: '#10151F',
    borderWidth: 2,
    borderColor: '#000',
  },
  exercisesTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  exerciseItem: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B2029',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#080A0D',
    paddingHorizontal: 8,
    marginBottom: 7,
  },
  exerciseIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B3039',
  },
  exerciseIconText: {
    fontSize: 18,
  },
  exerciseInfo: {
    flex: 1,
    marginLeft: 10,
  },
  exerciseName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  exerciseDetails: {
    color: '#9CA3AF',
    fontSize: 11,
    marginTop: 5,
  },
  exerciseActions: {
    alignItems: 'flex-end',
    gap: 5,
    marginLeft: 6,
  },
  editAction: {
    color: '#8EE524',
    fontSize: 11,
    fontWeight: 'bold',
  },
  deleteAction: {
    color: '#FF6B6B',
    fontSize: 11,
    fontWeight: 'bold',
  },
  addExerciseButton: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B2029',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#080A0D',
    paddingHorizontal: 14,
  },
  addExerciseIcon: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  addExerciseText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  modalContent: {
    backgroundColor: '#141A24',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#000',
    padding: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  input: {
    height: 46,
    color: '#fff',
    backgroundColor: '#1B2029',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#303845',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 6,
  },
  cancelButton: {
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  cancelButtonText: {
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#8EE524',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 14,
    minHeight: 40,
  },
  saveButtonText: {
    color: '#0B0F17',
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

