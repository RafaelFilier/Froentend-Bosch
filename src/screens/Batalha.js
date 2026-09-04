import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const amigosMock = [
  { id: 'user-003', nome: 'Murilo', nivel: 16, avatar: require('../../assets/Images/user.jpeg') },
];

const batalhaMock = {
  id: 'battle-001',
  status: 'ativa',
  terminaEm: '3 dias e 5 horas',
  jogador: { id: 'user-001', nome: 'Você', nivel: 18, avatar: require('../../assets/Images/user.jpeg') },
  adversario: { id: 'user-002', nome: 'Ana', nivel: 14, avatar: require('../../assets/Images/user.jpeg') },
  estatisticas: [
    { id: 'xp', nome: 'XP', jogador: 1800, adversario: 1100 },
    { id: 'treinos', nome: 'Treinos', jogador: 15, adversario: 12 },
    { id: 'desafios', nome: 'Desafios', jogador: 5, adversario: 7 },
    { id: 'conquistas', nome: 'Conquistas', jogador: 8, adversario: 8 },
  ],
};

// Troque somente esta função pela consulta da batalha ativa e dos amigos.
async function buscarBatalha() {
  return { batalha: null, amigos: amigosMock };
}

// Troque pelo INSERT do desafio e pelo retorno da nova batalha no banco/API.
async function desafiarAmigo(amigo) {
  return {
    ...batalhaMock,
    adversario: { id: amigo.id, nome: amigo.nome, nivel: amigo.nivel, avatar: amigo.avatar },
  };
}

export default function Batalha() {
  const navigation = useNavigation();
  const [dados, setDados] = useState(null);

  useEffect(() => {
    let montado = true;
    buscarBatalha().then((resultado) => { if (montado) setDados(resultado); });
    return () => { montado = false; };
  }, []);

  if (!dados) return <View style={styles.container} />;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.cabecalho}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltar}>
            <Text style={styles.iconeVoltar}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.titulo}>Batalhas</Text>
        </View>
        {dados.batalha?.status === 'ativa' ? (
          <>
            <View style={styles.confronto}>
              <Jogador jogador={dados.batalha.jogador} cor="#9500FF" />
              <Text style={styles.vs}>V<Text style={styles.barra}>/</Text>S</Text>
              <Jogador jogador={dados.batalha.adversario} cor="#8EE524" />
            </View>
            <Text style={styles.terminaLabel}>Termina em</Text>
            <Text style={styles.terminaValor}>{dados.batalha.terminaEm}</Text>
            <View style={styles.cartaoEstatisticas}>
              {dados.batalha.estatisticas.map((estatistica) => {
                const total = estatistica.jogador + estatistica.adversario;
                const percentual = total ? estatistica.jogador / total : 0.5;
                return (
                  <View style={styles.estatistica} key={estatistica.id}>
                    <View style={styles.linhaEstatistica}>
                      <Text style={styles.valor}>{estatistica.jogador.toLocaleString('pt-BR')}</Text>
                      <Text style={styles.nomeEstatistica}>{estatistica.nome}</Text>
                      <Text style={[styles.valor, styles.valorDireita]}>{estatistica.adversario.toLocaleString('pt-BR')}</Text>
                    </View>
                    <View style={styles.trilho}>
                      <View style={[styles.barraJogador, { flex: percentual }]} />
                      <View style={[styles.barraAdversario, { flex: 1 - percentual }]} />
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        ) : null}
        <Text style={styles.tituloSecao}>Desafiar amigos</Text>
        {dados.amigos.map((amigo) => (
          <View style={styles.amigo} key={amigo.id}>
            <Image source={amigo.avatar} style={styles.avatarAmigo} />
            <Text style={styles.nomeAmigo}>{amigo.nome}</Text>
            <TouchableOpacity style={styles.botaoDesafiar} onPress={async () => {
              const batalha = await desafiarAmigo(amigo);
              setDados((estadoAtual) => ({ ...estadoAtual, batalha }));
            }}>
              <Text style={styles.textoDesafiar}>Desafiar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function Jogador({ jogador, cor }) {
  return (
    <View style={styles.jogador}>
      <View style={[styles.molduraAvatar, { borderColor: cor }]}><Image source={jogador.avatar} style={styles.avatar} /></View>
      <Text style={styles.nomeJogador}>{jogador.nome}</Text>
      <Text style={styles.nivel}>(Nível {jogador.nivel})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0F17' },
  conteudo: { paddingHorizontal: 12, paddingTop: 24, paddingBottom: 30 },
  cabecalho: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  voltar: { width: 32, height: 32, justifyContent: 'center' },
  iconeVoltar: { color: '#FFF', fontSize: 34, lineHeight: 34 },
  titulo: { color: '#FFF', fontSize: 25, fontWeight: 'bold', marginLeft: 7 },
  confronto: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 23 },
  jogador: { alignItems: 'center', width: 112 },
  molduraAvatar: { width: 76, height: 76, padding: 3, borderRadius: 40, borderWidth: 2 },
  avatar: { width: '100%', height: '100%', borderRadius: 40 },
  nomeJogador: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginTop: 7 },
  nivel: { color: '#969BA3', fontSize: 12, marginTop: 2 },
  vs: { color: '#FFF', fontSize: 39, fontWeight: 'bold' },
  barra: { color: '#5D626A', fontWeight: 'normal' },
  terminaLabel: { color: '#A3A7AD', fontSize: 11, textAlign: 'center', marginTop: 9 },
  terminaValor: { color: '#A3A7AD', fontSize: 11, textAlign: 'center' },
  cartaoEstatisticas: { backgroundColor: '#141A24', borderRadius: 17, padding: 11, marginTop: 6 },
  estatistica: { marginBottom: 7 },
  linhaEstatistica: { flexDirection: 'row', alignItems: 'center' },
  valor: { color: '#FFF', fontSize: 15, fontWeight: 'bold', width: '25%' },
  valorDireita: { textAlign: 'right' },
  nomeEstatistica: { color: '#FFF', fontSize: 15, fontWeight: 'bold', textAlign: 'center', width: '50%' },
  trilho: { flexDirection: 'row', height: 7, borderRadius: 5, overflow: 'hidden', marginTop: 3 },
  barraJogador: { backgroundColor: '#9500FF' },
  barraAdversario: { backgroundColor: '#8EE524' },
  tituloSecao: { color: '#FFF', fontSize: 15, fontWeight: 'bold', marginTop: 8, marginBottom: 6 },
  amigo: { minHeight: 57, backgroundColor: '#141A24', borderRadius: 15, paddingHorizontal: 8, flexDirection: 'row', alignItems: 'center' },
  avatarAmigo: { width: 43, height: 43, borderRadius: 22, borderColor: '#8EE524', borderWidth: 2 },
  nomeAmigo: { color: '#FFF', fontSize: 17, fontWeight: 'bold', marginLeft: 12, flex: 1 },
  botaoDesafiar: { borderColor: '#55C94A', borderWidth: 2, borderRadius: 7, paddingHorizontal: 10, paddingVertical: 2 },
  textoDesafiar: { color: '#55C94A', fontSize: 12, fontWeight: 'bold' },
  vazio: { color: '#9CA3AF', textAlign: 'center', marginTop: 45 },
});
