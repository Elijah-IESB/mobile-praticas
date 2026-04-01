import { View, Text, FlatList, StyleSheet } from 'react-native';
import DespesaItem from './DespesaItem';

function DespesaLista({ despesas }) {
  const total = despesas.reduce((acc, item) => acc + item.valor, 0);

  return (
    <View>
      <FlatList
        data={despesas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DespesaItem {...item} />}
      />

      <View style={styles.totalBox}>
        <Text style={styles.totalText}>
          TOTAL: R$ {total.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

export default DespesaLista;

const styles = StyleSheet.create({
  totalBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});