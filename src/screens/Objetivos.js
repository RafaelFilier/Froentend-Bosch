import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";

export default function Objetivos() {
  const navigation = useNavigation();
  const [trainingDays, setTrainingDays] = useState([]);
  const [isAddDayVisible, setIsAddDayVisible] = useState(false);
  const [newDayDate, setNewDayDate] = useState('');
  const [newDayWeight, setNewDayWeight] = useState('');

  function addTrainingDay() {
    const weight = Number(newDayWeight.replace(',', '.'));

    if (!newDayDate.trim() || !weight) {
      return;
    }

    setTrainingDays((currentDays) => [
      ...currentDays,
      { date: newDayDate.trim(), weight },
    ]);
    setNewDayDate('');
    setNewDayWeight('');
    setIsAddDayVisible(false);
  }

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
          <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>Objetivos</Text>
        </View>
        <Text style={{ color: '#fff', fontSize: 22, marginTop: '5%', marginBottom: '3%', marginLeft: '5%', fontWeight: 'bold' }}>Seu Objetivo</Text>
        <View style={styles.squares_row}>
          <View style={styles.streak_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Peso Atual</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>87 kg</Text>
          </View>
          <Image
            source={require('../../assets/Images/no_changeAlvo.png')}
            style={styles.xpBadge}
            resizeMode="contain"
          />
          <View style={styles.life_square}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Meta</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'normal', marginLeft: 15, marginTop: 10 }}>77 kg</Text>
          </View>
        </View>
        <View style={styles.xpContainer}>
            <Text style={styles.xpText}>50%</Text>
            <ProgressBar
                progress={0.50}
                color="#8EE524"
                style={styles.xpBar}
            />
        </View>
        <View style={[styles.desafio_square, styles.chartSquare]}>
          <View style={styles.chartHeader}>
            <View>
              <Text style={styles.chartTitle}>Progresso por dia</Text>
              <Text style={styles.chartSubtitle}>{trainingDays.length} registros</Text>
            </View>
            <Text style={styles.chartAverage}>
              {trainingDays.length > 0 ? `${trainingDays[trainingDays.length - 1].weight} kg` : '--'}
            </Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chartArea}
          >
            {trainingDays.length > 0 ? trainingDays.map((trainingDay, index) => (
              <View style={styles.chartColumn} key={`${trainingDay.date}-${index}`}>
                <Text style={styles.chartValue}>{trainingDay.weight} kg</Text>
                <View style={styles.chartBarBackground}>
                  <View
                    style={[
                      styles.chartBar,
                      { height: `${(trainingDay.weight / Math.max(...trainingDays.map((day) => day.weight))) * 100}%` },
                    ]}
                  />
                </View>
                <Text style={styles.chartDay}>{trainingDay.date}</Text>
              </View>
            )) : (
              <Text style={styles.emptyChartText}>Adicione seu primeiro peso</Text>
            )}
          </ScrollView>
          <TouchableOpacity
            style={styles.addDayButton}
            onPress={() => setIsAddDayVisible(true)}
            activeOpacity={0.8}
          >
            <Text style={styles.addDayText}>+ Adicionar peso</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={isAddDayVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setIsAddDayVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Adicionar peso</Text>
              <TextInput
                style={styles.input}
                placeholder="Data (ex.: 30/09)"
                placeholderTextColor="#7A8491"
                value={newDayDate}
                onChangeText={setNewDayDate}
              />
              <TextInput
                style={styles.input}
                placeholder="Peso em kg (ex.: 71,5)"
                placeholderTextColor="#7A8491"
                keyboardType="decimal-pad"
                value={newDayWeight}
                onChangeText={setNewDayWeight}
              />
              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setIsAddDayVisible(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={addTrainingDay}>
                  <Text style={styles.saveButtonText}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.desafio_square}>
            <Image
                source={require('../../assets/Images/no_changeAlvo.png')}
                style={styles.xpBadge}
                resizeMode="contain"
            />
            <View style={styles.challengeContent}>
                <Text style={styles.challengeTitle}>Faltam 10 kg</Text>
                <Text style={styles.challengeDescription}>Continue assim! </Text>
            </View>
        </View>
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
    marginTop: '1%',
  },

  xpContainer: {
    width: '80%',
    marginTop: 0,
    alignSelf: 'center',


  },

  xpBar: {
    height: 10,
    borderRadius: 10,
    backgroundColor: '#9CA3AF',
    alignSelf: 'center',
    width: '90%',
  },

  xpText: {
    color: '#8EE524',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 'bold',
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
  chartSquare: {
    minHeight: 245,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 14,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chartSubtitle: {
    color: '#9CA3AF',
    fontSize: 11,
    marginTop: 4,
  },
  chartAverage: {
    color: '#8EE524',
    fontSize: 20,
    fontWeight: 'bold',
  },
  chartArea: {
    flexGrow: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 4,
    marginTop: 12,
  },
  chartColumn: {
    width: 42,
    height: 135,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  chartValue: {
    color: '#9CA3AF',
    fontSize: 9,
    marginBottom: 4,
  },
  chartBarBackground: {
    width: 20,
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#27313D',
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  chartBar: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#8EE524',
  },
  chartDay: {
    color: '#9CA3AF',
    fontSize: 10,
    marginTop: 5,
  },
  emptyChartText: {
    color: '#9CA3AF',
    fontSize: 13,
    alignSelf: 'center',
    marginVertical: 45,
  },
  addDayButton: {
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8EE524',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  addDayText: {
    color: '#8EE524',
    fontSize: 12,
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
  xpBadge: {
    width: 76,
    height: 76,
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
});

