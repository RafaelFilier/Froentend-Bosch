import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Entrar from './src/screens/Entrar';
import Cadastrar from './src/screens/Cadastrar';
import Treino from './src/screens/Treino';
import TreinoConcluido from './src/screens/TreinoConcluido';
import Batalha from './src/screens/Batalha';
import Perfil from './src/screens/Perfil';
import Objetivos from './src/screens/Objetivos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Loading"
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entrar" component={Entrar} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Treino" component={Treino} />
        <Stack.Screen name="TreinoConcluido" component={TreinoConcluido} />
        <Stack.Screen name="Batalha" component={Batalha} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Objetivos" component={Objetivos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}