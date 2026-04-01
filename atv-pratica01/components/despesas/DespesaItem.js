import { View, Text, StyleSheet } from 'react-native';

function formatarData(data) {
  const d = String(data.getDate()).padStart(2, '0');
  const m = String(data.getMonth() + 1).padStart(2, '0');
  const y = data.getFullYear();
  return `${d}/${m}/${y}`;
}

function DespesaItem({ descricao, valor, data }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {descricao} | Data: {formatarData(data)} | R$ {valor}
      </Text>
    </View>
  );
}

export default DespesaItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 14,
  },
});