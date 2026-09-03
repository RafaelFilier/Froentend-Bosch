import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from "react-native-paper";
import { useEffect, useState } from 'react';

export default function Loading() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B0F17',

  },

});