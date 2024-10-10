import { observer } from 'mobx-react';
import tarefasStore from '../../store/tarefasStore';

function Tarefas() {
  return (
    <ul>
      {tarefasStore.tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}

export default observer(Tarefas);