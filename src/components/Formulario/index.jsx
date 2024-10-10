import { useState } from 'react';
import tarefasStore from '../../store/tarefasStore';

export default function Formulario() {
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaTarefa.trim()) {
      tarefasStore.adicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
