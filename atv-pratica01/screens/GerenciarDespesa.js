import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

function GerenciarDespesa({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  function confirmarHandler() {
    console.log(descricao, valor);
    navigation.goBack();
  }

  function limparHandler() {
    setDescricao('');
    setValor('');
  }

  function cancelarHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Despesa</Text>

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />

      <TextInput
        placeholder="Valor (R$)"
        keyboardType="decimal-pad"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
      />

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.btnOk} onPress={confirmarHandler}>
          <Text style={styles.btnText}>OK</Text>
        </Pressable>

        <Pressable style={styles.btnLimpar} onPress={limparHandler}>
          <Text style={styles.btnText}>Limpar</Text>
        </Pressable>

        <Pressable style={styles.btnCancel} onPress={cancelarHandler}>
          <Text style={styles.btnText}>Cancelar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default GerenciarDespesa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  btnOk: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  btnLimpar: {
    backgroundColor: '#FFC107', // amarelo
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  btnCancel: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});