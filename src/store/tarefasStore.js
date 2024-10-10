import { observable, action } from "mobx";

class TarefasStore {
    @observable tarefas = ['Estudar React', 'Fazer exercício', 'Ler um livro'];

  @action adicionarTarefa = (novaTarefa) => {
    this.tarefas.push(novaTarefa);
  };
}

const tarefasStore = new TarefasStore();
export default tarefasStore;