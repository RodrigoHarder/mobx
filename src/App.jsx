import { Provider } from 'mobx-react';
import ListaDeTarefas from './components/ListaDeTarefas';
import tarefasStore from './store/tarefasStore';


export default function App() {
  return (

    <Provider tarefasStore={tarefasStore}>
      <div>
        <h1>Minha Lista de Tarefas</h1>
        <ListaDeTarefas />
      </div>
    </Provider>
  )
}
