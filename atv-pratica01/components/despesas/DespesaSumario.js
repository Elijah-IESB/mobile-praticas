import { View, Text } from 'react-native';

function DespesaSumario({ despesas, periodo }) {
  const total = despesas.reduce((acc, item) => acc + item.valor, 0);

  return (
    <View>
      <Text>{periodo}</Text>
      <Text>R$ {total.toFixed(2)}</Text>
    </View>
  );
}

export default DespesaSumario;