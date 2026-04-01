import DespesaSaida from '../components/despesas/DespesaSaida';

const DESPESAS = [
  { id: '1', descricao: 'Almoço', valor: 30, data: new Date() },
];

function DespesasRecentes() {
  return <DespesaSaida despesas={DESPESAS} />;
}

export default DespesasRecentes;