import DespesaSaida from '../components/despesas/DespesaSaida';

const DESPESAS = [
  { id: '1', descricao: 'Almoço', valor: 30, data: new Date() },
  { id: '2', descricao: 'Uber', valor: 15, data: new Date() },
];

function TodasDespesas() {
  return <DespesaSaida despesas={DESPESAS} />;
}

export default TodasDespesas;