import { View, Text } from 'react-native';
import { useState } from 'react';
import DespesaLista from '../components/despesas/DespesaLista';

const DESPESAS = [
  { id: '1', descricao: 'Almoço', valor: 30, data: new Date(2024, 5, 10) },
  { id: '2', descricao: 'Uber', valor: 15, data: new Date(2024, 5, 11) },
  { id: '3', descricao: 'Cinema', valor: 40, data: new Date(2025, 6, 1) },
];

function agruparPorAno(despesas) {
  const grupos = {};
  despesas.forEach((d) => {
    const ano = d.data.getFullYear();
    if (!grupos[ano]) grupos[ano] = [];
    grupos[ano].push(d);
  });
  return grupos;
}

function TodasDespesas() {
  const [filtro, setFiltro] = useState(null); 
  // null = tela inicial
  // "geral" = todas despesas
  // "2024" = ano específico

  const grupos = agruparPorAno(DESPESAS);
  const anos = Object.keys(grupos);

  // 🟡 TELA INICIAL
  if (!filtro) {
    return (
      <View>
        <Text style={{ textAlign: 'center', margin: 10 }}>
          Selecione um filtro
        </Text>

        {/* 🔥 BOTÃO GERAL */}
        <Text
          style={{
            padding: 15,
            backgroundColor: '#4CAF50',
            margin: 5,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
          onPress={() => setFiltro('geral')}
        >
          Ver Todas (Geral)
        </Text>

        {/* 🔹 ANOS */}
        {anos.map((ano) => (
          <Text
            key={ano}
            style={{
              padding: 15,
              backgroundColor: '#ddd',
              margin: 5,
              textAlign: 'center',
            }}
            onPress={() => setFiltro(ano)}
          >
            {ano}
          </Text>
        ))}
      </View>
    );
  }

  // 🔵 MODO GERAL
  if (filtro === 'geral') {
    const totalGeral = DESPESAS.reduce((acc, item) => acc + item.valor, 0);

    return (
      <View>
        <Text onPress={() => setFiltro(null)} style={{ margin: 10 }}>
          ← Voltar
        </Text>

        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Todas as Despesas
        </Text>

        <DespesaLista despesas={DESPESAS} />

        <Text style={{ textAlign: 'center', marginTop: 10 }}>
          Total Geral: R$ {totalGeral.toFixed(2)}
        </Text>
      </View>
    );
  }

  // 🔴 MODO POR ANO
  const despesasAno = grupos[filtro];
  const totalAno = despesasAno.reduce((acc, item) => acc + item.valor, 0);

  return (
    <View>
      <Text onPress={() => setFiltro(null)} style={{ margin: 10 }}>
        ← Voltar
      </Text>

      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Ano: {filtro}
      </Text>

      <DespesaLista despesas={despesasAno} />

      <Text style={{ textAlign: 'center', marginTop: 10 }}>
        Total do Ano: R$ {totalAno.toFixed(2)}
      </Text>
    </View>
  );
}

export default TodasDespesas;