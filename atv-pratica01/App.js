import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TodasDespesas from './screens/TodasDespesas';
import DespesasRecentes from './screens/DespesasRecentes';
import GerenciarDespesa from './screens/GerenciarDespesa';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Recentes" 
        component={DespesasRecentes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      
      <Tab.Screen 
        name="Todas" 
        component={TodasDespesas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Despesas" 
          component={Tabs}
          options={({ navigation }) => ({
            headerRight: () => (
              <Ionicons 
                name="add" 
                size={24} 
                color="black"
                onPress={() => navigation.navigate('GerenciarDespesa')}
              />
            )
          })}
        />

        <Stack.Screen 
          name="GerenciarDespesa" 
          component={GerenciarDespesa} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}