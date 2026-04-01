import { View } from 'react-native';
import DespesaLista from './DespesaLista';
import DespesaSumario from './DespesaSumario';

function DespesaSaida({ despesas }) {
  return (
    <View>
      <DespesaSumario despesas={despesas} periodo="Total" />
      <DespesaLista despesas={despesas} />
    </View>
  );
}

export default DespesaSaida;